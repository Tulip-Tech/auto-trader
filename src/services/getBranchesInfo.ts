export default function getBranchesInfo() {
    return JSON.parse((process.env.NEXT_PUBLIC_BRANCHES || '{}')) as Record<string, Record<string, string>>
}
