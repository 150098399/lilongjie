export const searchIndex = [
  {
    "title": "生成token",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "第一章 基础知识",
    "headers": [
      {
        "level": 2,
        "title": "1.1 CSS单位",
        "slug": "_1-1-css单位",
        "link": "#_1-1-css单位",
        "children": [
          {
            "level": 3,
            "title": "1.1.1 绝对单位",
            "slug": "_1-1-1-绝对单位",
            "link": "#_1-1-1-绝对单位",
            "children": []
          },
          {
            "level": 3,
            "title": "1.1.2 相对单位",
            "slug": "_1-1-2-相对单位",
            "link": "#_1-1-2-相对单位",
            "children": []
          }
        ]
      }
    ],
    "path": "/CSS/chapter1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
