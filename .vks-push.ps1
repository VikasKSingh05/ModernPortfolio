$repo = "C:\Users\LENOVO\Desktop\chanhdai.com"
Set-Location $repo

function G($a) { & git @a 2>$null; return $LASTEXITCODE }

"=== 0 cleanup: stop any stray dev proc (no-op if none) ==="
Stop-Process -Name node -Force -ErrorAction SilentlyContinue
"done"

"=== 1 identity ==="
"name : $(git config user.name)"
"email: $(git config user.email)"

"=== 2 ensure clean root: orphan from here ==="
$c = G @("checkout","--orphan","fresh-main")
"orphan exit: $c   branch: $(git rev-parse --abbrev-ref HEAD)"

"=== 3 stage all (ignore-env already in .gitignore) ==="
G @("add","-A") | Out-Null
"staged: $((git diff --cached --name-only | Measure-Object -Line).Lines)"

"=== 4 safety scan of staged list ==="
$staged = git diff --cached --name-only
$secrets = $staged | Where-Object { $_ -match '(^|\\)\.env(\.|$)|\.env\.local|\.env\.production|node_modules|\.next\\|\.tsbuildinfo$' }
"secrets-vulnerable staged: $($secrets.Count)"
$secrets | Select-Object -First 10
"has .env.example : $($staged -contains '.env.example')"
"has README.md   : $($staged -contains 'README.md')"
"has LICENSE     : $($staged -contains 'LICENSE')"
"has package.json: $($staged -contains 'package.json')"
"total staged    : $($staged.Count)"

"=== 5 fresh root commit ==="
git commit -m "Modern Portfolio" 2>&1 | Out-Null
"commit exit: $LASTEXITCODE"
"log: $(git log --oneline -1)"
"parent count: $((git rev-list --max-parents=1 --count HEAD))"

"=== 6 clean branch name + add remote ==="
git branch -M fresh-main main 2>&1 | Out-Null
git remote remove origin 2>$null
git remote add origin "https://github.com/VikasKSingh05/ModernPortfolio.git"
"remote: $(git remote get-url origin)"

"=== 7 push ==="
git push -u origin main 2>&1 | Out-Null
"push exit: $LASTEXITCODE"
"git ls-remote origin 2>&1"