function main() {
    const [major, minor, patch] = process.versions.node.split('.').map(Number)
    console.log(`v${major}.${minor}.${patch}`)
}

main()
