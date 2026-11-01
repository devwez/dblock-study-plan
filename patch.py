import io

p = "app.js"
t = open(p, encoding="utf-8").read()
t = t.replace("2 × 50 min", "3 × 65 min")
t = t.replace("10 min break", "2 × 10 min breaks")
t = t.replace('b.kind === "recall" ? "30 min" : "50 min"', 'b.kind === "recall" ? "30 min" : "65 min"')
open(p, "w", encoding="utf-8").write(t)

p = "index.html"
t = open(p, encoding="utf-8").read()
t = t.replace("five subjects · 2 hours a day", "five subjects · 3½ hours a day")
t = t.replace(
    "2 hours a day · 2 subjects · 2 sections each · 5-minute error log at the end.",
    "3½ hours a day · 3 subjects · 2 sections each · 5-minute error log.",
)
open(p, "w", encoding="utf-8").write(t)

p = "styles.css"
t = open(p, encoding="utf-8").read()
t = t.replace(
    ".blocks { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }",
    ".blocks { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px; }",
)
open(p, "w", encoding="utf-8").write(t)
print("done")
