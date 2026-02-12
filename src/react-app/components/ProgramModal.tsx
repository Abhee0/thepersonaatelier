
import { X, Check, ShieldCheck, CreditCard } from "lucide-react";
import { useEffect, useRef } from "react";

interface Program {
    name: string;
    price: string;
    type: string;
    description: string;
    features: string[];
    ideal: string;
    paymentLink: string;
    image?: string;
}

interface ProgramModalProps {
    isOpen: boolean;
    onClose: () => void;
    program: Program | null;
}

export default function ProgramModal({ isOpen, onClose, program }: ProgramModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !program) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div
                ref={modalRef}
                className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-scale-in [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 transition-colors z-10 bg-white/50 rounded-full"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="flex flex-col">
                    {/* Header Image */}
                    <div className="h-48 sm:h-64 bg-stone-100 relative overflow-hidden">
                        {program.image && (
                            <img
                                src={program.image}
                                alt={program.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-6 sm:p-8">
                            <p className="text-stone-200 text-sm font-medium uppercase tracking-wider mb-2">{program.type}</p>
                            <h2 className="text-white font-serif text-2xl sm:text-4xl leading-tight">{program.name}</h2>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-8">
                        {/* Key Info */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center border-b border-stone-100 pb-6">
                            <div>
                                <p className="text-stone-500 text-sm mb-1">Total Investment</p>
                                <p className="font-serif text-4xl text-stone-900">{program.price}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-stone-600 text-sm">
                                    <ShieldCheck size={18} className="text-amber-700" />
                                    <span>Secure Payment Gateway</span>
                                </div>
                                <div className="flex items-center gap-2 text-stone-600 text-sm">
                                    <CreditCard size={18} className="text-amber-700" />
                                    <span>All Cards & UPI Accepted</span>
                                </div>
                            </div>
                        </div>

                        {/* Description & Ideal For */}
                        <div className="space-y-4">
                            <h3 className="font-medium text-stone-900 text-lg">About This Program</h3>
                            <p className="text-stone-700 leading-relaxed">{program.description}</p>
                            <div className="bg-amber-50 p-4 border border-amber-100 rounded-sm">
                                <p className="text-sm text-stone-800">
                                    <span className="font-semibold text-amber-800">Perfect For: </span>
                                    {program.ideal}
                                </p>
                            </div>
                        </div>

                        {/* Detailed Features Grid */}
                        <div>
                            <h3 className="font-medium text-stone-900 text-lg mb-4">What You'll Get</h3>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-stone-700 text-sm p-3 bg-stone-50 rounded-sm">
                                        <Check size={16} className="text-amber-700 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 space-y-3">
                            <a
                                href={program.paymentLink}
                                className="flex items-center justify-center gap-2 w-full py-4 bg-stone-900 text-white text-base tracking-wide font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <span>PROCEED TO PAYMENT</span>
                                <CreditCard size={20} />
                            </a>
                            <p className="text-center text-xs text-stone-400">
                                Secure 256-bit encrypted payment. Instant access details sent via email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
