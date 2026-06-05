import sys
try:
    from pypdf import PdfReader
except ImportError:
    try:
        from PyPDF2 import PdfReader
    except ImportError:
        print("NO_PDF_LIB")
        sys.exit(2)

r = PdfReader(r'E:\飞书文件\BEE_ALPHA_camp_intro.pdf')
print(f"TOTAL_PAGES={len(r.pages)}")
for i, p in enumerate(r.pages):
    print(f'--- Page {i+1} ---')
    try:
        print(p.extract_text())
    except Exception as e:
        print(f"[extract error: {e}]")
