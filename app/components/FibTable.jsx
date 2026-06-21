"use client";
import { useState, useEffect, useRef } from 'react';

export default function FibTable() {
    const [fibData, setFibData] = useState([0, 1]);
    const bottomRef = useRef(null);

    const addNextFib = () => {
        setFibData(prev => [...prev, prev[prev.length - 1] + prev[prev.length - 2]]);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    addNextFib();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = bottomRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [fibData]);

    return (
        <div className="w-full">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr>
                    <th className="border-b p-2">Rang</th>
                    <th className="border-b p-2">Valeur</th>
                </tr>
                </thead>
                <tbody>
                {fibData.map((val, i) => (
                    <tr key={i}>
                        <td className="p-2 border-b">{i}</td>
                        <td className="p-2 border-b font-mono">{val}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div ref={bottomRef} className="h-10 w-full" />
        </div>
    );
}