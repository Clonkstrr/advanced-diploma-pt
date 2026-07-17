# Installing on the MacBook

## Getting a build

The repo lives at **https://github.com/Clonkstrr/advanced-diploma-pt** (private). The `.dmg` must be built on macOS — it cannot be produced on the Windows dev machine. Two options:

1. **GitHub Actions (recommended, no Mac setup needed).** On the repo page: Actions → *build-mac* → Run workflow (it also runs automatically when the workflow file changes). When it finishes, download the `advanced-diploma-pt-mac` artifact from the run page — it contains a **universal** `.dmg` (works on Intel and Apple Silicon). Artifacts expire after 90 days; just re-run the workflow for a fresh one.
2. **Directly on the MacBook.** Install Node 24+, clone/copy this repo, then:
   ```bash
   npm ci
   npm run electron:build
   ```
   The `.dmg` lands in `release/`.

## First launch (unsigned app)

The app is not code-signed (signing needs a $99/yr Apple Developer ID and is unnecessary for personal use), so macOS Gatekeeper will block a normal double-click the first time.

1. Open the `.dmg` and drag **Advanced Diploma PT** into Applications.
2. In Applications, **right-click (or Control-click) the app → Open → Open**.
   - This is only needed once; afterwards it opens normally.
   - If macOS still refuses (newer versions can): System Settings → Privacy & Security → scroll to the blocked-app message → "Open Anyway". Or from Terminal: `xattr -d com.apple.quarantine "/Applications/Advanced Diploma PT.app"`.

## Where her progress lives

Everything is saved automatically on the MacBook (no internet, no accounts) under
`~/Library/Application Support/advanced-diploma-pt`. Deleting the app does not delete progress; deleting that folder does.

To move progress between machines: in the app, Settings → Export progress (saves a `.json`), then Settings → Import progress on the other machine.
