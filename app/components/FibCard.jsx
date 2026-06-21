"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2 } from 'lucide-react';

export default function FibCard({ title, subtitle, children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all ${
                isExpanded ? "fixed inset-4 z-50 overflow-y-auto" : "relative w-full max-w-md"
            }`}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-xl font-bold">{title}</h2>
                    {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 hover:bg-gray-100 rounded text-gray-500 transition-colors"
                >
                    {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
            </div>
            <div className="overflow-y-auto max-h-[70vh]">
                {children}
            </div>
        </motion.div>
    );
}