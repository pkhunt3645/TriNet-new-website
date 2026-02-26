export type InputKey = 'barcode' | 'scan' | 'provider' | 'days' | 'wage';

export const presets: Record<InputKey, number[]> = {
    barcode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    scan: [10, 15, 20, 25, 30, 35, 40, 45, 50],
    provider: [5, 10, 25, 50, 100, 250, 500, 1000],
    days: [100, 150, 200, 225, 250, 300, 365],
    wage: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
};

export const inputFields: { label: string; key: InputKey }[] = [
    { label: 'Minutes Saved Per Scan:', key: 'barcode' },
    { label: 'Average Scans Per Day/Provider:', key: 'scan' },
    { label: 'Number Of Providers:', key: 'provider' },
    { label: 'Work Days Per Year:', key: 'days' },
    { label: 'Average Wage Rate ($/Hour):', key: 'wage' },
];

export const savingsMeasures = [
    'Each Barcode scan will auto populate clean data within a second.',
    'No Excel based reporting at the end of day/month.',
    'Accurate billing submission.',
    'Automated Inventory Tracking.',
    'Reorder Reporting.',
    'Expired Inventory Reporting.',
];