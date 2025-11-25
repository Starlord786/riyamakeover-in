import { useState, useEffect, useRef } from 'react';

export const useNetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    // Initial check: if offline at start, show page immediately
    const [showOfflinePage, setShowOfflinePage] = useState(!navigator.onLine);
    const [showNotification, setShowNotification] = useState(false);
    const [countdown, setCountdown] = useState(15);

    // Refs to keep track of timers and state to avoid stale closures
    const showOfflinePageRef = useRef(showOfflinePage);
    const timerRef = useRef(null);
    const intervalRef = useRef(null);

    // Update ref whenever state changes
    useEffect(() => {
        showOfflinePageRef.current = showOfflinePage;
    }, [showOfflinePage]);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            setShowOfflinePage(false);
            setShowNotification(false);
            setCountdown(15);

            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timerRef.current) clearTimeout(timerRef.current);
        };

        const handleOffline = () => {
            setIsOnline(false);

            // If already showing the full page, do nothing
            if (showOfflinePageRef.current) return;

            // Start the notification sequence
            setShowNotification(true);
            setCountdown(15);

            // Clear any existing timers just in case
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timerRef.current) clearTimeout(timerRef.current);

            // Start countdown
            intervalRef.current = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            // Set timeout to show full page after 15 seconds
            timerRef.current = setTimeout(() => {
                setShowOfflinePage(true);
                setShowNotification(false);
            }, 15000);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    return { isOnline, showOfflinePage, showNotification, countdown };
};
