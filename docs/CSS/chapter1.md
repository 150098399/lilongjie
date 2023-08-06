# 第一章 基础知识

## 1.1 CSS单位

### 1.1.1 绝对单位

在CSS中，绝对单位定义的大小是固定的物理度量单位，显示效果不会受到外界因素影响。多用于传统的平面印刷中，**极少用于前端开发**

| 绝对单位 | 说明           |
| -------- | -------------- |
| cm       | 厘米           |
| mm       | 毫米           |
| in       | 英寸           |
| pt       | 磅             |
| pc       | pica, 1pc=12pt |

### 1.1.2 相对单位

在CSS中，相对单位定义的大小是不固定的，一般是相对其他长度而言

| 相对单位 | 说明                     |
| -------- | ------------------------ |
| px       | 像素                     |
| %        | 百分比                   |
| em       | 1em = '当前元素'字体大小 |
| rem      | 1rem = '根元素'字体大小  |
| ex       |                          |
| vw       |                          |
| vh       |                          |

#### 1. 像素（px）	

​	严格来说，px属于相对单位，因为**屏幕分辨率不同，1px的大小也是不同的**，例如：windows系统的分辨率每英寸96px，Mac系统的分辨率为每英寸72px。但是如果不考虑屏幕分辨率，我们也可以把px当作绝对单位来看待，这也是为什么很多地方说px是绝对单位的原因。

#### 2. 百分比（%）

​	在CSS中，支持百分比作为单位的属性大致分为3类

- **width、height、font-size**的百分比是相对于父元素"相同属性"的值来计算的。
- **line-height**的百分比是相对与当前元素的font-size来计算的。
- ** vertical-aligin**的百分比是相对于当前元素的line-height来决定的。

#### 3. em

​	em是相对于"**当前元素**"的字体大小而言的，1em = '当前元素'字体大小，如果当前元素的font-size没有定义，则当前元素会继承父元素的font-size。如果当前

元素的所有祖先元素都沒有定义font-size，则当前元素会继承浏览器默认的font-size。**所有浏览器默认的font-size都是16px**。

:bow_and_arrow:技巧一：首行缩进使用text-indent:2em来实现

:bow_and_arrow:使用em作为统一单位

+  如果想要统一使用em作为单位，那么对于任何元素都不需要再设置font-size为px，而是根据根元素的font-size值换算为em单位；为了简化计算，在css中提前申明`body{font-size: 62.5%}`，此时默认字体大小变为16px * 62.5% = 10px；1em = 10px; 0.75em = 7.5px

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
      * {
        padding: 0;
        margin: 0;
      }
      p {
        display: inline-block;
        border: 1px solid silver;
      }
      /* 使用px作为单位 */
      #p1{
        font-size: 15px;
        width: 150px;
        height: 120px;
        text-indent: 30px;
      }
  
      /* 使用em作为单位 */
      body {
        font-size: 62.5%;
      }
      #p2 {
        font-size: 1.5em;
        width: 10em;
        height: 8em;
        text-indent: 2em;
      }
    </style>
  </head>
  <body>
    <p id="p1">王朝已经建立，统治还在继续，恭喜JDG京东电子竞技俱乐部勇夺2023LPL夏季赛冠军，实现联赛三连冠。</p>
    <p id="p2">王朝已经建立，统治还在继续，恭喜JDG京东电子竞技俱乐部勇夺2023LPL夏季赛冠军，实现联赛三连冠。</p>
  </body>
  </html>
  ```

  在实际开发中，对于em，我们一般需要计算两次：

  第一次：当前元素的font-size值 15px/10px = 1.5em

  第二次：当前元素的width：150px /15px = 10em  当前元素的height: 120px/15px = 8em

 :bow_and_arrow: 使用em作为字体大小单位

+ 要控制一个页面的字体大小，使用px作为单位可扩展性不好，使用百分比作为单位又不符合习惯，**最佳选择是使用em为单位来定义字体大小**。当需要改变页面整体的文字大小时，只需要改变根元素的字体大小即可。

#### 4. rem

rem是css3新引入的单位，rem布局是**移动端**最常见的布局方式之一。

rem和em很相似，但是也有很明显的区别，em是相对于当前元素的字体大小，而rem是相对于根元素（html）的字体大小

