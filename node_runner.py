#!/usr/bin/env python3
"""
AI for Money · 硅基雇佣军轻量化节点运行时
Silicon Fleet Lightweight Node Runtime & Cashflow Orchestrator
支持一键在本地或廉价 VPS 上启动多智能体搞钱守护进程与收款控制台。
"""

import json
import os
from datetime import datetime
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(os.environ.get("PORT", 8888))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

RECIPES_STATUS = [
    {"id": "bounty-hunter", "name": "硅基赏金猎人 (GitHub/Polar.sh)", "status": "READY", "target": "USDC/USD"},
    {"id": "digital-vending", "name": "0% 抽成自动化数字自贩机", "status": "ACTIVE", "target": "WeChat/Alipay/EVM"},
    {"id": "bluefruit-gpu", "name": "蓝果短剧 12 节点 GPU 编排", "status": "DISPATCHED", "target": "Content Revenue"},
    {"id": "long-tail-funnel", "name": "公域长尾流量收银钩子注射器", "status": "LISTENING", "target": "Traffic Leads"},
]

def print_banner():
    banner = f"""
========================================================================
    ⚡ AI for Money · 80 亿人硅基普遍基本收入 (Silicon Sovereign UBI) ⚡
    Node Runtime Active | Psyverse Sovereign Individual Protocol
========================================================================
[✓] 科学第一性原理 -> [✓] 工程确定性实现 -> [✓] 商业价值捕获 -> [✓] 80亿人普惠
    
    🌐 本地控制台:  http://localhost:{PORT}
    💳 结算收款通道: https://psyverse.fun/payment
    📖 现实主权白皮书: MANIFESTO_8_BILLION.md
========================================================================
"""
    print(banner)

class SovereignHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/api/status":
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            payload = {
                "system": "AI for Money - Sovereign Fleet Node",
                "version": "1.0.0",
                "timestamp": datetime.utcnow().isoformat() + "Z",
                "status": "HEALTHY",
                "recipes": RECIPES_STATUS,
                "manifesto": "https://github.com/gewenbo888/ai-for-money/blob/main/MANIFESTO_8_BILLION.md",
                "official_payment": "https://psyverse.fun/payment",
                "ens": "gewenbo.eth"
            }
            self.wfile.write(json.dumps(payload, ensure_ascii=False, indent=2).encode('utf-8'))
            return
        return super().do_GET()

def main():
    print_banner()
    os.chdir(BASE_DIR)
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, SovereignHandler)
    print(f"[*] 硅基搞钱节点已在端口 {PORT} 启动监听 (按 Ctrl+C 退出)...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[*] 硅基搞钱节点优雅关闭。")
        httpd.server_close()

if __name__ == "__main__":
    main()