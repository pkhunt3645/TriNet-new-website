'use client';

import React, { useState, useMemo } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import { ChevronDown, Clock, Activity, CheckCircle } from 'lucide-react';
import { findNearestPreset, formatCurrencyDetailed, formatCurrency } from '@/utils/commonUtils';
import { InputKey, inputFields, presets, savingsMeasures } from '@/data/roiCalculatorPageData';

const initialValues: Record<InputKey, number> = {
    barcode: 3,
    scan: 10,
    provider: 10,
    days: 250,
    wage: 25,
}

const CalculatorSection: React.FC = () => {
    const [values, setValues] = useState<Record<InputKey, number>>(initialValues);

    const updateValue = (key: InputKey, val: number) => {
        setValues((prev) => ({ ...prev, [key]: val }));
    };

    const calculations = useMemo(() => {
        const { barcode, scan, provider, days, wage } = values;
        const totalSavings = (barcode * scan * provider * days * wage) / 60;

        let cost: number;
        if (provider <= 10) cost = 60 * 10;
        else if (provider <= 25) cost = 60 * provider;
        else if (provider <= 50) cost = 55 * provider;
        else if (provider <= 100) cost = 45 * provider;
        else if (provider <= 250) cost = 35 * provider;
        else if (provider <= 500) cost = 25 * provider;
        else cost = 20 * provider;

        const totalCost = 12 * cost + 3500;
        const roi = totalCost > 0 && totalSavings > 0 ? Math.round(((totalSavings - totalCost) / totalCost) * 100) : 0;
        const timeToROI = totalSavings > 0 ? (totalCost / totalSavings) * 12 : 0;
        const minutesSavedPerDay = barcode * scan;
        const hoursSavedAnnually = Math.round((barcode * scan * provider * days) / 60);

        return {
            totalSavings,
            totalCost,
            roi,
            timeToROI,
            minutesSavedPerDay,
            hoursSavedAnnually,
        };
    }, [values]);

    const paybackData = useMemo(() => {
        const data = [];
        for (let year = 0; year <= 4; year++) {
            let yearlyInvestment = calculations.totalCost;
            let yearlySavings = calculations.totalSavings;

            if (year >= 3) {
                yearlyInvestment = calculations.totalCost * Math.pow(1.03, year - 2);
                yearlySavings = calculations.totalSavings * Math.pow(1.03, year - 2);
            }

            const netCashFlow = yearlySavings - (year === 0 ? yearlyInvestment : 0);
            data.push({ year, investment: yearlyInvestment, netCashFlow });
        }
        return data;
    }, [calculations.totalCost, calculations.totalSavings]);

    const totalFiveYearSavings = paybackData.reduce((sum, row) => sum + row.netCashFlow, 0);

    const getSliderProgress = (value: number, options: number[]) => {
        const min = Math.min(...options);
        const max = Math.max(...options);
        if (max === min) return 50;
        return ((value - min) / (max - min)) * 100;
    };

    const maxBarHeight = 200;
    const maxValue = Math.max(calculations.totalCost, calculations.totalSavings, 1) * 1.15;
    const investmentBarHeight = (calculations.totalCost / maxValue) * maxBarHeight;
    const savingsBarHeight = (calculations.totalSavings / maxValue) * maxBarHeight;

    return (
        <section id="roi-calculator" className="tn-section">
            <div className="tn-container">
                <SectionHeading
                    heading="ROI Calculator"
                    title="Healthcare Efficiency <span>ROI Calculator</span>"
                    subTitle="See how reducing minutes per scan, automating workflows, and optimizing provider productivity translates into significant annual savings."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 mt-10 lg:mt-14">
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl border border-light-gray/40 shadow-sm p-6 xl:p-8 space-y-4 lg:space-y-6">
                            {inputFields.map((field) => {
                                const options = presets[field.key];
                                const value = values[field.key];
                                const progress = getSliderProgress(value, options);

                                return (
                                    <div key={field.key}>
                                        <label className="block text-sm font-semibold text-secondary mb-2.5" htmlFor={field.key}>{field.label}</label>
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-22 lg:w-30">
                                                <select
                                                    className="appearance-none bg-light-cyan border border-light-gray/50 rounded-lg pl-4 pr-9 py-2.5 text-secondary font-semibold font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition duration-500 cursor-pointer w-22 lg:w-30"
                                                    value={value}
                                                    id={field.key}
                                                    onChange={(e) => updateValue(field.key, Number(e.target.value))}
                                                >
                                                    {options.map((opt) => (
                                                        <option key={opt} value={opt} className='font-poppins'>{opt}</option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-txt-gray pointer-events-none" />
                                            </div>
                                            <input
                                                type="range"
                                                className="roi-slider flex-1"
                                                min={Math.min(...options)}
                                                max={Math.max(...options)}
                                                value={value}
                                                onChange={(e) => {
                                                    const nearest = findNearestPreset(Number(e.target.value), options);
                                                    updateValue(field.key, nearest);
                                                }}
                                                style={{
                                                    background: `linear-gradient(to right, var(--color-primary) ${progress}%, var(--color-light-gray) ${progress}%)`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-white rounded-2xl border border-light-gray/40 shadow-sm p-6 xl:p-8">
                            <h3 className="text-xl font-bold text-primary mb-6">Payback Period Calculator</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-light-gray/40">
                                            <th className="py-3 px-4 text-left font-semibold text-secondary"></th>
                                            <th className="py-3 px-4 text-center font-semibold text-secondary">Investment</th>
                                            <th className="py-3 px-4 text-center font-semibold text-secondary">Net cash flow</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paybackData.map((row, i) => (
                                            <tr key={i} className="border-b border-light-gray/20">
                                                <td className="py-3 px-4 font-medium text-secondary">Year <span className='font-poppins font-normal'>{row.year}</span></td>
                                                <td className="py-3 px-4 text-center text-txt-gray font-poppins">{formatCurrencyDetailed(row.investment)}</td>
                                                <td className="py-3 px-4 text-center text-txt-gray font-poppins">{formatCurrencyDetailed(row.netCashFlow)}</td>
                                            </tr>
                                        ))}
                                        <tr className="border-t-2 border-light-gray/40 bg-light-cyan/50">
                                            <td className="py-4 px-4 font-bold text-primary text-base" colSpan={2}>Total 5 years Saving</td>
                                            <td className="py-4 px-4 text-center font-bold text-primary text-base font-poppins">{formatCurrencyDetailed(totalFiveYearSavings)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-xs text-txt-gray italic text-right">License and support cost increase by 3%</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl border border-light-gray/40 shadow-sm p-6 xl:p-8">
                            <h3 className="text-xl font-bold text-primary mb-8">Investment vs Annual Savings</h3>
                            <div className="flex items-end justify-center gap-16 mb-3" style={{ height: maxBarHeight + 30 + 'px' }}>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold text-txt-gray mb-2 whitespace-nowrap font-poppins">
                                        {formatCurrency(calculations.totalCost)}
                                    </span>
                                    <div
                                        className="w-20 rounded-t-lg bg-light-gray transition-all duration-500 ease-out"
                                        style={{ height: `${investmentBarHeight}px` }}
                                    />
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold text-primary mb-2 whitespace-nowrap font-poppins">
                                        {formatCurrency(calculations.totalSavings)}
                                    </span>
                                    <div
                                        className="w-20 rounded-t-lg bg-linear-to-t from-primary to-primary/80 transition-all duration-500 ease-out"
                                        style={{ height: `${savingsBarHeight}px` }}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center gap-16 border-t border-light-gray/30 pt-3">
                                <span className="w-20 text-center text-sm font-semibold text-txt-gray">Investment</span>
                                <span className="w-20 text-center text-sm font-semibold text-secondary">Annual Savings</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-light-cyan rounded-xl p-5 text-center">
                                    <p className="text-2xl xl:text-3xl font-bold text-primary font-poppins">{formatCurrency(calculations.totalSavings)}</p>
                                    <p className="text-sm text-txt-gray mt-1">Annual Savings</p>
                                </div>
                                <div className="bg-light-cyan rounded-xl p-5 text-center">
                                    <p className="text-2xl xl:text-3xl font-bold text-theme-green font-poppins">
                                        ~{calculations.roi}%
                                    </p>
                                    <p className="text-sm text-txt-gray mt-1">
                                        Estimated ROI
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between gap-2 bg-light-cyan rounded-xl px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-semibold text-secondary">Time to Break Even</span>
                                </div>
                                <span className="text-lg font-bold text-primary font-poppins">
                                    {calculations.timeToROI > 0 ? `${calculations.timeToROI.toFixed(1)} months` : 'Immediate'}
                                </span>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Activity className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-semibold text-secondary">Efficiency Metrics</span>
                                </div>
                                <div className="flex items-center justify-between text-sm py-2 border-b border-light-gray/20">
                                    <span className="text-txt-gray">Minutes saved per provider/day</span>
                                    <span className="font-bold text-primary font-poppins">{calculations.minutesSavedPerDay} min</span>
                                </div>
                                <div className="flex items-center justify-between text-sm py-2">
                                    <span className="text-txt-gray">Total hours saved annually</span>
                                    <span className="font-bold text-primary font-poppins">{calculations.hoursSavedAnnually} hrs</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-light-gray/40 shadow-sm p-6 xl:p-8">
                            <div className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                                <h3>Savings Measure</h3>
                                <span className="font-normal text-sm">(Average 3 to 10 Minutes)</span>
                            </div>
                            <ul className="space-y-3">
                                {savingsMeasures.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-txt-gray"
                                    >
                                        <CheckCircle className="w-4.5 h-4.5 text-theme-green shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalculatorSection;
