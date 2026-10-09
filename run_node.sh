#!/usr/bin/env bash
# ==============================================================================
# AI for Money · 80 亿人硅基普遍基本收入 (Silicon Sovereign UBI) 一键启动脚本
# ==============================================================================
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "======================================================================"
echo "  ⚡ AI for Money (Vibe Earning) · 80 亿人普惠节点部署器 ⚡"
echo "======================================================================"
echo "[+] 检查运行环境..."

if command -v python3 >/dev/null 2>&1; then
    echo "[✓] 检测到 Python 3: $(python3 --version)"
    export PORT="${PORT:-8888}"
    echo "[+] 启动硅基搞钱节点运行时 (Port: $PORT)..."
    python3 node_runner.py
elif command -v docker >/dev/null 2>&1; then
    echo "[✓] 检测到 Docker 环境，启动容器化节点..."
    docker build -t ai-for-money:latest .
    docker run -d -p 8888:8888 --name vibe-earning-node ai-for-money:latest
    echo "[✓] 容器已在后台运行！访问: http://localhost:8888"
else
    echo "[!] 未检测到 Python3 或 Docker，尝试直接使用原生浏览器查看..."
    open index.html || xdg-open index.html
fi
