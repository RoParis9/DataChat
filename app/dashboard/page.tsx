
const MOCKED_INITIAL_DOCUMENTS: Document[] = [
    { id: '1', orgId: 'org_1', name: 'employee_handbook_v2.pdf', type: 'pdf', size: '2.4 MB', uploadDate: 'Oct 24, 2023', status: 'indexed', vectorCount: 1204 },
    { id: '2', orgId: 'org_1', name: 'q3_financial_results.csv', type: 'csv', size: '450 KB', uploadDate: 'Oct 25, 2023', status: 'processing', vectorCount: 0 },
    { id: '3', orgId: 'org_1', name: 'engineering_onboarding.notion', type: 'notion', size: '128 KB', uploadDate: 'Oct 23, 2023', status: 'indexed', vectorCount: 856 },
    { id: '4', orgId: 'org_1', name: 'marketing_assets_links.txt', type: 'txt', size: '12 KB', uploadDate: 'Oct 22, 2023', status: 'failed', vectorCount: 0 },
];

export default function DashboardOverview() {

    return (
        <>
            <div>
                <div>
                    <h1>hello</h1>
                </div>
            </div>
        </>
    )
}
