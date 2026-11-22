import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import Volunteering from './Volunteering';

const metrics = [
    { target: 98, format: (progress) => `${Math.round(progress * 98)}%+`, label: "Snowflake Parity" },
    { target: 137, format: (progress) => `${Math.round(progress * 137)}+`, label: "Jobs Validated" },
    { target: 7, format: (progress) => `${Math.round(progress * 7)}/7`, label: "Output Parity" },
    { target: 10, format: (progress) => `${Math.round(progress * 10)}+`, label: "Validation Runs" },
    { target: 15, format: (progress) => `${Math.round(progress * 2)}–${Math.round(progress * 15)} sec`, label: "Monitoring Runtime" },
    { target: 2, format: (progress) => `${Math.round(progress * 2)}+`, label: "Productionized Internal Solutions" }
];

const MetricCard = ({ metric, index }) => {
    const ref = useRef(null);
    const progress = useMotionValue(0);
    const value = useTransform(progress, metric.format);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    useEffect(() => {
        if (isInView) {
            const animation = animate(progress, 1, { duration: 1.4, delay: index * 0.08, ease: 'easeOut' });
            return () => animation.stop();
        }
    }, [index, isInView, progress]);

    return (
        <motion.article
            ref={ref}
            className="card group text-center p-5 hover:-translate-y-1 hover:border-mikadoYellow/40 hover:shadow-lg"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 16 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
        >
            <motion.p className="text-2xl md:text-3xl font-bold text-roseTaupe dark:text-mikadoYellow tabular-nums">
                {value}
            </motion.p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{metric.label}</p>
        </motion.article>
    );
};

const ImpactPreview = () => (
    <div className="py-10 bg-gray-50/70 dark:bg-black/50" aria-label="Impact metrics preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl font-bold text-numberText dark:text-white mb-6">Impact at a glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {metrics.slice(0, 5).map((metric, index) => (
                    <MetricCard key={metric.label} metric={metric} index={index} />
                ))}
            </div>
        </div>
    </div>
);

const Impact = () => (
    <section id="impact" className="py-16 bg-gray-50/70 dark:bg-black/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-4">Impact</h2>
            <h3 className="text-center text-xl font-bold text-numberText dark:text-white mb-8">Professional Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                {metrics.map((metric, index) => (
                    <MetricCard key={metric.label} metric={metric} index={index} />
                ))}
            </div>
            <div className="mt-16">
                <Volunteering />
            </div>
        </div>
    </section>
);

export { ImpactPreview };
export default Impact;
