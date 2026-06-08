
export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: CourseContent[];
  homework: Homework;
  solution: Solution;
}

export interface CourseContent {
  title: string;
  sections: ContentSection[];
}

export interface ContentSection {
  title?: string;
  type: 'text' | 'code' | 'image' | 'chart';
  content: string;
}

export interface Homework {
  multipleChoice: Question[];
  trueFalse: Question[];
  coding: CodingQuestion;
}

export interface Question {
  id: number;
  question: string;
  options?: string[];
  answer: string | boolean;
  explanation: string;
}

export interface CodingQuestion {
  title: string;
  description: string;
  starterCode: string;
  testCases: TestCase[];
  solutionCode: string;
  explanation: string;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
}

export interface Solution {
  multipleChoice: QuestionSolution[];
  trueFalse: QuestionSolution[];
  coding: CodingSolution;
}

export interface QuestionSolution {
  id: number;
  correctAnswer: string | boolean;
  explanation: string;
  keyPoints: string[];
}

export interface CodingSolution {
  solutionCode: string;
  explanation: string;
  keyPoints: string[];
}

export const courses: Course[] = [
  {
    id: 'python',
    title: 'Python基础',
    description: '学习数据分析必备的Python编程基础，包括变量、数据类型、函数等核心概念。',
    icon: '🐍',
    content: [
      {
        title: 'Python入门',
        sections: [
          {
            type: 'text',
            content: 'Python是一种高级编程语言，语法简洁清晰，非常适合初学者。它在数据分析领域有着广泛的应用。'
          },
          {
            type: 'code',
            content: '# 你的第一个Python程序\nprint("Hello, World!")'
          }
        ]
      },
      {
        title: '变量与数据类型',
        sections: [
          {
            type: 'text',
            content: 'Python支持多种数据类型，包括整数、浮点数、字符串、列表、字典等。'
          },
          {
            type: 'code',
            content: '# 变量定义示例\nname = "Alice"  # 字符串\nage = 25        # 整数\nheight = 1.75  # 浮点数\nis_student = True  # 布尔值'
          }
        ]
      },
      {
        title: '控制结构',
        sections: [
          {
            type: 'text',
            content: '使用if语句进行条件判断，使用for和while循环进行迭代操作。'
          },
          {
            type: 'code',
            content: '# 条件判断与循环\nfor i in range(1, 6):\n    if i % 2 == 0:\n        print(f"{i} 是偶数")\n    else:\n        print(f"{i} 是奇数")'
          }
        ]
      }
    ],
    homework: {
      multipleChoice: [
        {
          id: 1,
          question: 'Python中用于输出内容的函数是？',
          options: ['echo()', 'print()', 'console.log()', 'write()'],
          answer: 'print()',
          explanation: 'print()函数是Python中最常用的输出函数，用于将指定内容打印到控制台。'
        },
        {
          id: 2,
          question: '以下哪个不是Python的数据类型？',
          options: ['int', 'string', 'float', 'char'],
          answer: 'char',
          explanation: 'Python没有单独的char类型，单个字符使用字符串表示。'
        },
        {
          id: 3,
          question: 'Python中定义函数使用什么关键字？',
          options: ['function', 'def', 'fn', 'func'],
          answer: 'def',
          explanation: 'Python使用def关键字来定义函数。'
        },
        {
          id: 4,
          question: 'Python列表使用什么括号表示？',
          options: ['()', '{}', '[]', '<>'],
          answer: '[]',
          explanation: 'Python列表使用方括号[]表示。'
        },
        {
          id: 5,
          question: 'Python中注释使用什么符号？',
          options: ['//', '/* */', '#', '--'],
          answer: '#',
          explanation: 'Python使用#符号进行单行注释。'
        },
        {
          id: 6,
          question: 'Python的文件扩展名通常是？',
          options: ['.java', '.py', '.js', '.cpp'],
          answer: '.py',
          explanation: 'Python文件通常使用.py作为扩展名。'
        },
        {
          id: 7,
          question: 'Python中求列表长度使用什么函数？',
          options: ['size()', 'length()', 'len()', 'count()'],
          answer: 'len()',
          explanation: 'len()函数用于获取序列的长度。'
        },
        {
          id: 8,
          question: 'Python字典使用什么括号表示？',
          options: ['[]', '()', '{}', '<>'],
          answer: '{}',
          explanation: 'Python字典使用花括号{}表示。'
        },
        {
          id: 9,
          question: 'Python中如何导入模块？',
          options: ['include', 'import', 'require', 'using'],
          answer: 'import',
          explanation: 'Python使用import关键字导入模块。'
        },
        {
          id: 10,
          question: 'Python中用于处理异常的关键字是？',
          options: ['try...catch', 'try...except', 'error...handle', 'catch...error'],
          answer: 'try...except',
          explanation: 'Python使用try...except语句来捕获和处理异常。'
        }
      ],
      trueFalse: [
        {
          id: 1,
          question: 'Python是一种强类型语言。',
          answer: true,
          explanation: 'Python是强类型语言，虽然它是动态类型的，但会进行类型检查。'
        },
        {
          id: 2,
          question: 'Python支持函数重载。',
          answer: false,
          explanation: 'Python不直接支持函数重载，后面定义的函数会覆盖前面的。'
        },
        {
          id: 3,
          question: 'Python中列表是可变的。',
          answer: true,
          explanation: 'Python列表是可变对象，可以在原对象上进行修改。'
        },
        {
          id: 4,
          question: 'Python中字符串是可变的。',
          answer: false,
          explanation: 'Python字符串是不可变对象，修改字符串会创建新的字符串对象。'
        },
        {
          id: 5,
          question: 'Python中缩进是语法的一部分。',
          answer: true,
          explanation: 'Python使用缩进来表示代码块，这是Python语法的重要特点。'
        },
        {
          id: 6,
          question: 'Python支持多继承。',
          answer: true,
          explanation: 'Python类可以继承多个父类，支持多继承。'
        },
        {
          id: 7,
          question: 'Python中None等于0。',
          answer: false,
          explanation: 'None是Python中的空值，不等于0或空字符串。'
        },
        {
          id: 8,
          question: 'Python中可以使用//进行整除。',
          answer: true,
          explanation: '//运算符在Python中用于整除，返回商的整数部分。'
        },
        {
          id: 9,
          question: 'Python中列表索引从1开始。',
          answer: false,
          explanation: 'Python列表索引从0开始。'
        },
        {
          id: 10,
          question: 'Python支持Lambda表达式。',
          answer: true,
          explanation: 'Python支持使用Lambda表达式创建匿名函数。'
        }
      ],
      coding: {
        title: '计算列表平均值',
        description: '编写一个函数，接收一个数字列表作为参数，返回列表中所有数字的平均值。',
        starterCode: 'def calculate_average(numbers):\n    # 在这里编写你的代码\n    pass\n\n# 测试示例\nprint(calculate_average([1, 2, 3, 4, 5]))  # 应该输出 3.0',
        testCases: [
          {
            input: '[1, 2, 3, 4, 5]',
            expectedOutput: '3.0'
          },
          {
            input: '[10, 20, 30]',
            expectedOutput: '20.0'
          }
        ],
        solutionCode: 'def calculate_average(numbers):\n    if not numbers:\n        return 0\n    return sum(numbers) / len(numbers)\n\n# 测试示例\nprint(calculate_average([1, 2, 3, 4, 5]))  # 应该输出 3.0',
        explanation: '首先检查列表是否为空，避免除以零错误。然后使用sum()函数计算总和，len()函数获取长度，相除得到平均值。'
      }
    },
    solution: {
      multipleChoice: [
        { id: 1, correctAnswer: 'print()', explanation: 'print()函数是Python中最常用的输出函数，用于将指定内容打印到控制台。', keyPoints: ['print()函数', '控制台输出'] },
        { id: 2, correctAnswer: 'char', explanation: 'Python没有单独的char类型，单个字符使用字符串表示。', keyPoints: ['字符串类型', '数据类型'] },
        { id: 3, correctAnswer: 'def', explanation: 'Python使用def关键字来定义函数。', keyPoints: ['函数定义', 'def关键字'] },
        { id: 4, correctAnswer: '[]', explanation: 'Python列表使用方括号[]表示。', keyPoints: ['列表', '方括号'] },
        { id: 5, correctAnswer: '#', explanation: 'Python使用#符号进行单行注释。', keyPoints: ['注释', '#符号'] },
        { id: 6, correctAnswer: '.py', explanation: 'Python文件通常使用.py作为扩展名。', keyPoints: ['文件扩展名', '.py'] },
        { id: 7, correctAnswer: 'len()', explanation: 'len()函数用于获取序列的长度。', keyPoints: ['len()函数', '序列长度'] },
        { id: 8, correctAnswer: '{}', explanation: 'Python字典使用花括号{}表示。', keyPoints: ['字典', '花括号'] },
        { id: 9, correctAnswer: 'import', explanation: 'Python使用import关键字导入模块。', keyPoints: ['模块导入', 'import关键字'] },
        { id: 10, correctAnswer: 'try...except', explanation: 'Python使用try...except语句来捕获和处理异常。', keyPoints: ['异常处理', 'try...except'] }
      ],
      trueFalse: [
        { id: 1, correctAnswer: true, explanation: 'Python是强类型语言，虽然它是动态类型的，但会进行类型检查。', keyPoints: ['强类型', '动态类型'] },
        { id: 2, correctAnswer: false, explanation: 'Python不直接支持函数重载，后面定义的函数会覆盖前面的。', keyPoints: ['函数重载', '函数覆盖'] },
        { id: 3, correctAnswer: true, explanation: 'Python列表是可变对象，可以在原对象上进行修改。', keyPoints: ['可变性', '列表'] },
        { id: 4, correctAnswer: false, explanation: 'Python字符串是不可变对象，修改字符串会创建新的字符串对象。', keyPoints: ['不可变性', '字符串'] },
        { id: 5, correctAnswer: true, explanation: 'Python使用缩进来表示代码块，这是Python语法的重要特点。', keyPoints: ['缩进', '代码块'] },
        { id: 6, correctAnswer: true, explanation: 'Python类可以继承多个父类，支持多继承。', keyPoints: ['多继承', '类'] },
        { id: 7, correctAnswer: false, explanation: 'None是Python中的空值，不等于0或空字符串。', keyPoints: ['None', '空值'] },
        { id: 8, correctAnswer: true, explanation: '//运算符在Python中用于整除，返回商的整数部分。', keyPoints: ['整除', '//运算符'] },
        { id: 9, correctAnswer: false, explanation: 'Python列表索引从0开始。', keyPoints: ['索引', '从0开始'] },
        { id: 10, correctAnswer: true, explanation: 'Python支持使用Lambda表达式创建匿名函数。', keyPoints: ['Lambda表达式', '匿名函数'] }
      ],
      coding: {
        solutionCode: 'def calculate_average(numbers):\n    if not numbers:\n        return 0\n    return sum(numbers) / len(numbers)',
        explanation: '首先检查列表是否为空，避免除以零错误。然后使用sum()函数计算总和，len()函数获取长度，相除得到平均值。',
        keyPoints: ['空列表检查', 'sum()函数', 'len()函数', '平均值计算']
      }
    }
  },
  {
    id: 'data-sources',
    title: '数据来源与类型',
    description: '了解数据分析的数据来源、数据类型和数据结构，掌握数据的基本特征。',
    icon: '📊',
    content: [
      {
        title: '数据来源',
        sections: [
          {
            type: 'text',
            content: '数据来源多种多样，包括：公开数据集、企业内部数据、网络爬虫数据、传感器数据等。'
          }
        ]
      },
      {
        title: '数据类型',
        sections: [
          {
            type: 'text',
            content: '数据可以分为：数值型数据、分类型数据、时间序列数据等。'
          }
        ]
      }
    ],
    homework: {
      multipleChoice: [
        { id: 1, question: '以下哪种属于数值型数据？', options: ['性别', '身高', '颜色', '城市'], answer: '身高', explanation: '身高是数值型数据，可以进行数学运算。' },
        { id: 2, question: '以下哪种属于分类型数据？', options: ['年龄', '收入', '学历', '体重'], answer: '学历', explanation: '学历是分类型数据，表示类别。' },
        { id: 3, question: 'CSV文件的全称是？', options: ['Comma Separated Values', 'Computer Standard Values', 'Common Simple Values', 'Compact Storage Values'], answer: 'Comma Separated Values', explanation: 'CSV是Comma Separated Values的缩写，逗号分隔值文件。' },
        { id: 4, question: 'JSON数据格式使用什么符号表示对象？', options: ['()', '[]', '{}', '<>'], answer: '{}', explanation: 'JSON使用花括号{}表示对象。' },
        { id: 5, question: 'Excel文件的常用扩展名是？', options: ['.txt', '.csv', '.xlsx', '.json'], answer: '.xlsx', explanation: '.xlsx是Excel文件的常用扩展名。' },
        { id: 6, question: 'SQL主要用于？', options: ['图像处理', '数据库查询', '网页设计', '游戏开发'], answer: '数据库查询', explanation: 'SQL是结构化查询语言，用于数据库操作。' },
        { id: 7, question: 'API的全称是？', options: ['Application Programming Interface', 'Advanced Protocol Interface', 'Automated Processing Interface', 'Application Process Integration'], answer: 'Application Programming Interface', explanation: 'API是Application Programming Interface的缩写。' },
        { id: 8, question: '以下哪个是关系型数据库？', options: ['MongoDB', 'MySQL', 'Redis', 'Cassandra'], answer: 'MySQL', explanation: 'MySQL是关系型数据库的代表。' },
        { id: 9, question: '时间序列数据的特点是？', options: ['无序的', '按时间顺序排列', '只有分类值', '不能预测'], answer: '按时间顺序排列', explanation: '时间序列数据是按时间顺序排列的数据点序列。' },
        { id: 10, question: '缺失值处理中，删除法适合于？', options: ['缺失值很多时', '缺失值较少时', '任何情况', '只在小数据集'], answer: '缺失值较少时', explanation: '删除法适合缺失值较少且删除后不影响分析的情况。' }
      ],
      trueFalse: [
        { id: 1, question: '所有数据都可以进行加减乘除运算。', answer: false, explanation: '分类型数据不能进行数学运算。' },
        { id: 2, question: 'CSV文件可以用Excel打开。', answer: true, explanation: 'CSV文件可以用Excel和其他表格软件打开。' },
        { id: 3, question: 'JSON格式支持嵌套结构。', answer: true, explanation: 'JSON支持对象和数组的嵌套，适合表示复杂数据。' },
        { id: 4, question: 'API返回的数据只能是JSON格式。', answer: false, explanation: 'API可以返回JSON、XML等多种格式。' },
        { id: 5, question: 'NoSQL数据库不使用SQL作为查询语言。', answer: true, explanation: 'NoSQL数据库通常使用非SQL的查询方式。' },
        { id: 6, question: '中位数受异常值影响很大。', answer: false, explanation: '中位数对异常值不敏感，是稳健的统计量。' },
        { id: 7, question: '众数只能用于分类型数据。', answer: false, explanation: '众数也可以用于数值型数据。' },
        { id: 8, question: '标准差越小表示数据越分散。', answer: false, explanation: '标准差越小表示数据越集中。' },
        { id: 9, question: '数据标准化会改变数据的分布形状。', answer: false, explanation: '标准化只改变尺度，不改变分布形状。' },
        { id: 10, question: '数据清洗是数据分析的第一步。', answer: true, explanation: '数据清洗是数据分析流程中至关重要的第一步。' }
      ],
      coding: {
        title: '数据类型判断',
        description: '编写一个函数，判断输入数据的类型，并返回对应的类型名称。',
        starterCode: 'def get_data_type(data):\n    # 在这里编写你的代码\n    pass\n\n# 测试示例\nprint(get_data_type(123))          # 应该输出 "整数"\nprint(get_data_type("hello"))     # 应该输出 "字符串"\nprint(get_data_type([1, 2, 3]))    # 应该输出 "列表"',
        testCases: [
          { input: '123', expectedOutput: '整数' },
          { input: '"hello"', expectedOutput: '字符串' }
        ],
        solutionCode: 'def get_data_type(data):\n    if isinstance(data, int):\n        return "整数"\n    elif isinstance(data, float):\n        return "浮点数"\n    elif isinstance(data, str):\n        return "字符串"\n    elif isinstance(data, list):\n        return "列表"\n    elif isinstance(data, dict):\n        return "字典"\n    else:\n        return "其他类型"\n\n# 测试示例\nprint(get_data_type(123))          # 应该输出 "整数"\nprint(get_data_type("hello"))     # 应该输出 "字符串"\nprint(get_data_type([1, 2, 3]))    # 应该输出 "列表"',
        explanation: '使用isinstance()函数判断数据类型，根据不同类型返回对应的描述字符串。'
      }
    },
    solution: {
      multipleChoice: [
        { id: 1, correctAnswer: '身高', explanation: '身高是数值型数据，可以进行数学运算。', keyPoints: ['数值型数据', '数学运算'] },
        { id: 2, correctAnswer: '学历', explanation: '学历是分类型数据，表示类别。', keyPoints: ['分类型数据', '类别'] },
        { id: 3, correctAnswer: 'Comma Separated Values', explanation: 'CSV是Comma Separated Values的缩写，逗号分隔值文件。', keyPoints: ['CSV', '逗号分隔'] },
        { id: 4, correctAnswer: '{}', explanation: 'JSON使用花括号{}表示对象。', keyPoints: ['JSON', '花括号'] },
        { id: 5, correctAnswer: '.xlsx', explanation: '.xlsx是Excel文件的常用扩展名。', keyPoints: ['Excel', '.xlsx'] },
        { id: 6, correctAnswer: '数据库查询', explanation: 'SQL是结构化查询语言，用于数据库操作。', keyPoints: ['SQL', '数据库'] },
        { id: 7, correctAnswer: 'Application Programming Interface', explanation: 'API是Application Programming Interface的缩写。', keyPoints: ['API', '应用程序接口'] },
        { id: 8, correctAnswer: 'MySQL', explanation: 'MySQL是关系型数据库的代表。', keyPoints: ['关系型数据库', 'MySQL'] },
        { id: 9, correctAnswer: '按时间顺序排列', explanation: '时间序列数据是按时间顺序排列的数据点序列。', keyPoints: ['时间序列', '顺序'] },
        { id: 10, correctAnswer: '缺失值较少时', explanation: '删除法适合缺失值较少且删除后不影响分析的情况。', keyPoints: ['缺失值', '删除法'] }
      ],
      trueFalse: [
        { id: 1, correctAnswer: false, explanation: '分类型数据不能进行数学运算。', keyPoints: ['数据类型', '数学运算'] },
        { id: 2, correctAnswer: true, explanation: 'CSV文件可以用Excel和其他表格软件打开。', keyPoints: ['CSV', 'Excel'] },
        { id: 3, correctAnswer: true, explanation: 'JSON支持对象和数组的嵌套，适合表示复杂数据。', keyPoints: ['JSON', '嵌套'] },
        { id: 4, correctAnswer: false, explanation: 'API可以返回JSON、XML等多种格式。', keyPoints: ['API', '数据格式'] },
        { id: 5, correctAnswer: true, explanation: 'NoSQL数据库通常使用非SQL的查询方式。', keyPoints: ['NoSQL', '查询语言'] },
        { id: 6, correctAnswer: false, explanation: '中位数对异常值不敏感，是稳健的统计量。', keyPoints: ['中位数', '异常值'] },
        { id: 7, correctAnswer: false, explanation: '众数也可以用于数值型数据。', keyPoints: ['众数', '数据类型'] },
        { id: 8, correctAnswer: false, explanation: '标准差越小表示数据越集中。', keyPoints: ['标准差', '离散程度'] },
        { id: 9, correctAnswer: false, explanation: '标准化只改变尺度，不改变分布形状。', keyPoints: ['标准化', '分布'] },
        { id: 10, correctAnswer: true, explanation: '数据清洗是数据分析流程中至关重要的第一步。', keyPoints: ['数据清洗', '数据分析流程'] }
      ],
      coding: {
        solutionCode: 'def get_data_type(data):\n    if isinstance(data, int):\n        return "整数"\n    elif isinstance(data, float):\n        return "浮点数"\n    elif isinstance(data, str):\n        return "字符串"\n    elif isinstance(data, list):\n        return "列表"\n    elif isinstance(data, dict):\n        return "字典"\n    else:\n        return "其他类型"',
        explanation: '使用isinstance()函数判断数据类型，根据不同类型返回对应的描述字符串。',
        keyPoints: ['isinstance()', '类型判断', '条件分支']
      }
    }
  },
  {
    id: 'data-collection',
    title: '数据采集',
    description: '学习网络爬虫、API调用等数据采集技术，获取分析所需的数据。',
    icon: '🕸️',
    content: [
      {
        title: '网络爬虫基础',
        sections: [
          { type: 'text', content: '网络爬虫是一种自动获取网页内容的程序。Python中常用的爬虫库有requests、BeautifulSoup、Scrapy等。' },
          { type: 'code', content: 'import requests\nfrom bs4 import BeautifulSoup\n\n# 发送HTTP请求\nresponse = requests.get("https://example.com")\nsoup = BeautifulSoup(response.text, "html.parser")\n\n# 提取标题\ntitle = soup.find("h1").text\nprint(title)' }
        ]
      }
    ],
    homework: {
      multipleChoice: [
        { id: 1, question: 'HTTP协议中，用于获取资源的方法是？', options: ['POST', 'GET', 'PUT', 'DELETE'], answer: 'GET', explanation: 'GET方法用于请求获取指定资源。' },
        { id: 2, question: '以下哪个库常用于Python网络请求？', options: ['numpy', 'requests', 'matplotlib', 'pandas'], answer: 'requests', explanation: 'requests是Python中最流行的HTTP请求库。' },
        { id: 3, question: 'HTML中用于定义段落的标签是？', options: ['<div>', '<span>', '<p>', '<br>'], answer: '<p>', explanation: '<p>标签用于定义段落。' },
        { id: 4, question: 'BeautifulSoup主要用于？', options: ['发送HTTP请求', '解析HTML', '存储数据', '数据可视化'], answer: '解析HTML', explanation: 'BeautifulSoup用于解析HTML和XML文档。' },
        { id: 5, question: 'JSON解析使用什么模块？', options: ['csv', 'json', 'xml', 'yaml'], answer: 'json', explanation: 'Python的json模块用于JSON数据的解析和生成。' },
        { id: 6, question: 'API密钥通常放在请求的哪里？', options: ['URL参数', '请求体', '请求头', '以上都是'], answer: '以上都是', explanation: 'API密钥可以放在URL参数、请求头或请求体中。' },
        { id: 7, question: 'Scrapy是一个什么框架？', options: ['Web框架', '爬虫框架', '数据可视化框架', '机器学习框架'], answer: '爬虫框架', explanation: 'Scrapy是一个快速高效的网络爬虫框架。' },
        { id: 8, question: 'robots.txt文件的作用是？', options: ['加密网页', '告诉爬虫哪些可以爬', '存储数据', '加速访问'], answer: '告诉爬虫哪些可以爬', explanation: 'robots.txt告诉爬虫网站的爬取规则。' },
        { id: 9, question: 'CSS选择器中，class使用什么符号？', options: ['#', '.', '*', '>'], answer: '.', explanation: 'CSS选择器中.用于选择class。' },
        { id: 10, question: 'XPath中，从根节点开始使用什么符号？', options: ['//', '/', '.', '..'], answer: '/', explanation: 'XPath中/表示从根节点开始。' }
      ],
      trueFalse: [
        { id: 1, question: '爬虫可以爬取任何网站。', answer: false, explanation: '需要遵守robots.txt和网站的使用条款。' },
        { id: 2, question: 'POST请求比GET请求更安全。', answer: true, explanation: 'POST请求参数不在URL中，相对更安全。' },
        { id: 3, question: 'BeautifulSoup可以解析XML。', answer: true, explanation: 'BeautifulSoup支持HTML和XML解析。' },
        { id: 4, question: '所有API都是免费的。', answer: false, explanation: '很多API需要付费或有调用限制。' },
        { id: 5, question: 'User-Agent用于标识客户端。', answer: true, explanation: 'User-Agent告诉服务器请求来自什么客户端。' },
        { id: 6, question: 'Session可以保持登录状态。', answer: true, explanation: 'Session对象可以保持cookie，维持会话。' },
        { id: 7, question: 'AJAX加载的数据可以直接在HTML源码中找到。', answer: false, explanation: 'AJAX数据是动态加载的，需要分析网络请求。' },
        { id: 8, question: 'JSON的语法比XML更简洁。', answer: true, explanation: 'JSON通常比XML更简洁，更易读。' },
        { id: 9, question: '爬虫速度越快越好。', answer: false, explanation: '过快的请求可能给服务器造成压力，也可能被封IP。' },
        { id: 10, question: '代理IP可以隐藏真实IP。', answer: true, explanation: '使用代理IP可以隐藏爬虫的真实IP地址。' }
      ],
      coding: {
        title: '模拟简单爬虫',
        description: '编写一个函数，模拟从HTML文本中提取所有链接的功能。',
        starterCode: 'def extract_links(html):\n    # 简单模拟：从字符串中提取类似 "href=\"url\"" 的内容\n    # 在这里编写你的代码\n    pass\n\n# 测试示例\ntest_html = \'<a href="https://example.com">Example</a> <a href="https://test.com">Test</a>\'\nprint(extract_links(test_html))  # 应该输出 ["https://example.com", "https://test.com"]',
        testCases: [
          { input: '\'<a href="https://example.com">Example</a>\'', expectedOutput: '["https://example.com"]' }
        ],
        solutionCode: 'import re\n\ndef extract_links(html):\n    # 使用正则表达式提取href属性中的URL\n    pattern = r\'href=["\\\']([^"\\\']+)["\\\']\'\n    links = re.findall(pattern, html)\n    return links\n\n# 测试示例\ntest_html = \'<a href="https://example.com">Example</a> <a href="https://test.com">Test</a>\'\nprint(extract_links(test_html))  # 应该输出 ["https://example.com", "https://test.com"]',
        explanation: '使用正则表达式匹配href属性，提取其中的URL链接。'
      }
    },
    solution: {
      multipleChoice: [
        { id: 1, correctAnswer: 'GET', explanation: 'GET方法用于请求获取指定资源。', keyPoints: ['HTTP GET', '获取资源'] },
        { id: 2, correctAnswer: 'requests', explanation: 'requests是Python中最流行的HTTP请求库。', keyPoints: ['requests库', 'HTTP请求'] },
        { id: 3, correctAnswer: '<p>', explanation: '<p>标签用于定义段落。', keyPoints: ['HTML标签', '<p>'] },
        { id: 4, correctAnswer: '解析HTML', explanation: 'BeautifulSoup用于解析HTML和XML文档。', keyPoints: ['BeautifulSoup', 'HTML解析'] },
        { id: 5, correctAnswer: 'json', explanation: 'Python的json模块用于JSON数据的解析和生成。', keyPoints: ['json模块', 'JSON解析'] },
        { id: 6, correctAnswer: '以上都是', explanation: 'API密钥可以放在URL参数、请求头或请求体中。', keyPoints: ['API密钥', '请求位置'] },
        { id: 7, correctAnswer: '爬虫框架', explanation: 'Scrapy是一个快速高效的网络爬虫框架。', keyPoints: ['Scrapy', '爬虫框架'] },
        { id: 8, correctAnswer: '告诉爬虫哪些可以爬', explanation: 'robots.txt告诉爬虫网站的爬取规则。', keyPoints: ['robots.txt', '爬取规则'] },
        { id: 9, correctAnswer: '.', explanation: 'CSS选择器中.用于选择class。', keyPoints: ['CSS选择器', 'class'] },
        { id: 10, correctAnswer: '/', explanation: 'XPath中/表示从根节点开始。', keyPoints: ['XPath', '根节点'] }
      ],
      trueFalse: [
        { id: 1, correctAnswer: false, explanation: '需要遵守robots.txt和网站的使用条款。', keyPoints: ['爬虫伦理', 'robots.txt'] },
        { id: 2, correctAnswer: true, explanation: 'POST请求参数不在URL中，相对更安全。', keyPoints: ['POST', '安全性'] },
        { id: 3, correctAnswer: true, explanation: 'BeautifulSoup支持HTML和XML解析。', keyPoints: ['BeautifulSoup', 'XML解析'] },
        { id: 4, correctAnswer: false, explanation: '很多API需要付费或有调用限制。', keyPoints: ['API', '费用'] },
        { id: 5, correctAnswer: true, explanation: 'User-Agent告诉服务器请求来自什么客户端。', keyPoints: ['User-Agent', '客户端标识'] },
        { id: 6, correctAnswer: true, explanation: 'Session对象可以保持cookie，维持会话。', keyPoints: ['Session', '登录状态'] },
        { id: 7, correctAnswer: false, explanation: 'AJAX数据是动态加载的，需要分析网络请求。', keyPoints: ['AJAX', '动态加载'] },
        { id: 8, correctAnswer: true, explanation: 'JSON通常比XML更简洁，更易读。', keyPoints: ['JSON', 'XML'] },
        { id: 9, correctAnswer: false, explanation: '过快的请求可能给服务器造成压力，也可能被封IP。', keyPoints: ['爬取速度', '反爬'] },
        { id: 10, correctAnswer: true, explanation: '使用代理IP可以隐藏爬虫的真实IP地址。', keyPoints: ['代理IP', '隐藏IP'] }
      ],
      coding: {
        solutionCode: 'import re\n\ndef extract_links(html):\n    # 使用正则表达式提取href属性中的URL\n    pattern = r\'href=["\\\']([^"\\\']+)["\\\']\'\n    links = re.findall(pattern, html)\n    return links',
        explanation: '使用正则表达式匹配href属性，提取其中的URL链接。',
        keyPoints: ['正则表达式', 're.findall', 'URL提取']
      }
    }
  },
  {
    id: 'data-cleaning',
    title: '数据清洗',
    description: '学习数据清洗技术，处理缺失值、异常值和重复数据，提高数据质量。',
    icon: '🧹',
    content: [
      {
        title: '数据清洗概述',
        sections: [
          { type: 'text', content: '数据清洗是数据分析的重要步骤，包括：处理缺失值、处理异常值、删除重复数据、数据类型转换等。' }
        ]
      }
    ],
    homework: {
      multipleChoice: [
        { id: 1, question: '处理缺失值时，用均值填充适用于？', options: ['分类数据', '数值数据', '时间序列', '任何数据'], answer: '数值数据', explanation: '均值填充适用于数值型数据。' },
        { id: 2, question: 'IQR方法中，IQR指的是？', options: ['均值', '中位数', '四分位距', '标准差'], answer: '四分位距', explanation: 'IQR是四分位距，Q3-Q1。' },
        { id: 3, question: '检测异常值常用的可视化方法是？', options: ['折线图', '箱线图', '饼图', '热力图'], answer: '箱线图', explanation: '箱线图可以直观显示异常值。' },
        { id: 4, question: '删除完全相同的行使用什么方法？', options: ['dropna()', 'drop_duplicates()', 'fillna()', 'replace()'], answer: 'drop_duplicates()', explanation: 'drop_duplicates()用于删除重复行。' },
        { id: 5, question: '以下哪个不是数据清洗的内容？', options: ['处理缺失值', '特征工程', '处理异常值', '删除重复'], answer: '特征工程', explanation: '特征工程是数据预处理的下一步。' },
        { id: 6, question: 'Z-score方法中，通常Z-score超过多少视为异常值？', options: ['1', '2', '3', '5'], answer: '3', explanation: '通常|Z|>3视为异常值。' },
        { id: 7, question: '前向填充使用什么方法？', options: ['bfill', 'ffill', 'mean', 'median'], answer: 'ffill', explanation: 'ffill(forward fill)前向填充。' },
        { id: 8, question: '数据清洗的第一步通常是？', options: ['处理异常值', '数据探索', '删除重复', '填充缺失值'], answer: '数据探索', explanation: '先了解数据，再进行清洗。' },
        { id: 9, question: '以下哪个是数据质量问题？', options: ['缺失值', '异常值', '重复值', '以上都是'], answer: '以上都是', explanation: '缺失值、异常值、重复值都是数据质量问题。' },
        { id: 10, question: '处理异常值时，最安全的方法是？', options: ['直接删除', ' caping', '视为缺失值', '不处理'], answer: ' caping', explanation: 'caping（截断）将异常值限制在合理范围。' }
      ],
      trueFalse: [
        { id: 1, question: '所有缺失值都应该删除。', answer: false, explanation: '删除可能丢失信息，应根据情况选择填充或删除。' },
        { id: 2, question: '异常值一定是错误数据。', answer: false, explanation: '异常值也可能是真实的重要数据。' },
        { id: 3, question: '重复数据一定需要删除。', answer: false, explanation: '有时重复数据是有意义的，需要根据业务判断。' },
        { id: 4, question: '中位数填充对异常值不敏感。', answer: true, explanation: '中位数是稳健的统计量，适合有异常值的数据。' },
        { id: 5, question: '数据清洗只需要做一次。', answer: false, explanation: '数据清洗是迭代过程，可能需要多次进行。' },
        { id: 6, question: '数据类型转换也是数据清洗的一部分。', answer: true, explanation: '确保数据类型正确是数据清洗的重要内容。' },
        { id: 7, question: '缺失值越多，数据质量越好。', answer: false, explanation: '缺失值越多，数据质量通常越差。' },
        { id: 8, question: '用众数填充适合分类数据。', answer: true, explanation: '众数是分类数据缺失值填充的常用方法。' },
        { id: 9, question: '箱线图中的胡须长度通常是1.5倍IQR。', answer: true, explanation: '箱线图默认使用1.5*IQR作为异常值判定标准。' },
        { id: 10, question: '数据清洗后可以直接建模，不需要验证。', answer: false, explanation: '清洗后需要验证数据质量是否达到要求。' }
      ],
      coding: {
        title: '简单数据清洗',
        description: '编写一个函数，接收一个列表，移除其中的None值，并返回新列表。',
        starterCode: 'def clean_list(data):\n    # 在这里编写你的代码\n    pass\n\n# 测试示例\ndirty_data = [1, None, 3, None, 5]\nprint(clean_list(dirty_data))  # 应该输出 [1, 3, 5]',
        testCases: [
          { input: '[1, None, 3, None, 5]', expectedOutput: '[1, 3, 5]' }
        ],
        solutionCode: 'def clean_list(data):\n    # 使用列表推导式过滤None值\n    return [x for x in data if x is not None]\n\n# 测试示例\ndirty_data = [1, None, 3, None, 5]\nprint(clean_list(dirty_data))  # 应该输出 [1, 3, 5]',
        explanation: '使用列表推导式，保留所有不为None的元素。'
      }
    },
    solution: {
      multipleChoice: [
        { id: 1, correctAnswer: '数值数据', explanation: '均值填充适用于数值型数据。', keyPoints: ['均值填充', '数值数据'] },
        { id: 2, correctAnswer: '四分位距', explanation: 'IQR是四分位距，Q3-Q1。', keyPoints: ['IQR', '四分位距'] },
        { id: 3, correctAnswer: '箱线图', explanation: '箱线图可以直观显示异常值。', keyPoints: ['箱线图', '异常值检测'] },
        { id: 4, correctAnswer: 'drop_duplicates()', explanation: 'drop_duplicates()用于删除重复行。', keyPoints: ['drop_duplicates', '去重'] },
        { id: 5, correctAnswer: '特征工程', explanation: '特征工程是数据预处理的下一步。', keyPoints: ['特征工程', '数据清洗'] },
        { id: 6, correctAnswer: '3', explanation: '通常|Z|>3视为异常值。', keyPoints: ['Z-score', '异常值'] },
        { id: 7, correctAnswer: 'ffill', explanation: 'ffill(forward fill)前向填充。', keyPoints: ['ffill', '前向填充'] },
        { id: 8, correctAnswer: '数据探索', explanation: '先了解数据，再进行清洗。', keyPoints: ['数据探索', '数据清洗流程'] },
        { id: 9, correctAnswer: '以上都是', explanation: '缺失值、异常值、重复值都是数据质量问题。', keyPoints: ['数据质量', '常见问题'] },
        { id: 10, correctAnswer: ' caping', explanation: 'caping（截断）将异常值限制在合理范围。', keyPoints: ['caping', '异常值处理'] }
      ],
      trueFalse: [
        { id: 1, correctAnswer: false, explanation: '删除可能丢失信息，应根据情况选择填充或删除。', keyPoints: ['缺失值处理', '删除策略'] },
        { id: 2, correctAnswer: false, explanation: '异常值也可能是真实的重要数据。', keyPoints: ['异常值', '业务判断'] },
        { id: 3, correctAnswer: false, explanation: '有时重复数据是有意义的，需要根据业务判断。', keyPoints: ['重复值', '业务判断'] },
        { id: 4, correctAnswer: true, explanation: '中位数是稳健的统计量，适合有异常值的数据。', keyPoints: ['中位数', '稳健性'] },
        { id: 5, correctAnswer: false, explanation: '数据清洗是迭代过程，可能需要多次进行。', keyPoints: ['数据清洗', '迭代过程'] },
        { id: 6, correctAnswer: true, explanation: '确保数据类型正确是数据清洗的重要内容。', keyPoints: ['数据类型', '数据清洗'] },
        { id: 7, correctAnswer: false, explanation: '缺失值越多，数据质量通常越差。', keyPoints: ['缺失值', '数据质量'] },
        { id: 8, correctAnswer: true, explanation: '众数是分类数据缺失值填充的常用方法。', keyPoints: ['众数', '分类数据'] },
        { id: 9, correctAnswer: true, explanation: '箱线图默认使用1.5*IQR作为异常值判定标准。', keyPoints: ['箱线图', '1.5*IQR'] },
        { id: 10, correctAnswer: false, explanation: '清洗后需要验证数据质量是否达到要求。', keyPoints: ['数据验证', '数据清洗'] }
      ],
      coding: {
        solutionCode: 'def clean_list(data):\n    # 使用列表推导式过滤None值\n    return [x for x in data if x is not None]',
        explanation: '使用列表推导式，保留所有不为None的元素。',
        keyPoints: ['列表推导式', 'None值过滤']
      }
    }
  },
  {
    id: 'data-visualization',
    title: '数据可视化',
    description: '使用Matplotlib、Seaborn等工具创建各种图表，直观展示数据特征。',
    icon: '📈',
    content: [
      {
        title: '数据可视化基础',
        sections: [
          { type: 'text', content: '数据可视化是数据分析的重要组成部分，可以帮助我们直观地理解数据。常用的Python可视化库有Matplotlib、Seaborn、Plotly等。' },
          { type: 'code', content: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# 创建数据\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\n# 绘制折线图\nplt.figure(figsize=(10, 6))\nplt.plot(x, y)\nplt.title("正弦波")\nplt.xlabel("x")\nplt.ylabel("sin(x)")\nplt.grid(True)\nplt.show()' }
        ]
      }
    ],
    homework: {
      multipleChoice: [
        { id: 1, question: 'Matplotlib中，用于创建画布的函数是？', options: ['plt.plot()', 'plt.figure()', 'plt.show()', 'plt.title()'], answer: 'plt.figure()', explanation: 'plt.figure()用于创建新的画布。' },
        { id: 2, question: '以下哪个图表适合显示趋势变化？', options: ['饼图', '散点图', '折线图', '直方图'], answer: '折线图', explanation: '折线图适合显示随时间变化的趋势。' },
        { id: 3, question: '以下哪个图表适合比较类别大小？', options: ['折线图', '箱线图', '柱状图', '热力图'], answer: '柱状图', explanation: '柱状图适合比较不同类别的大小。' },
        { id: 4, question: 'Seaborn是基于哪个库构建的？', options: ['Plotly', 'Matplotlib', 'Bokeh', 'ggplot'], answer: 'Matplotlib', explanation: 'Seaborn是基于Matplotlib的高级可视化库。' },
        { id: 5, question: '直方图主要用于显示？', options: ['趋势', '分布', '关系', '占比'], answer: '分布', explanation: '直方图用于显示数据的分布情况。' },
        { id: 6, question: '散点图主要用于显示？', options: ['分布', '两个变量的关系', '占比', '趋势'], answer: '两个变量的关系', explanation: '散点图用于显示两个变量之间的关系。' },
        { id: 7, question: '饼图主要用于显示？', options: ['趋势', '分布', '占比', '关系'], answer: '占比', explanation: '饼图用于显示各部分占总体的比例。' },
        { id: 8, question: '箱线图不能显示的统计量是？', options: ['中位数', '均值', '四分位数', '异常值'], answer: '均值', explanation: '箱线图显示中位数、四分位数、异常值，但不直接显示均值。' },
        { id: 9, question: '热力图最适合显示？', options: ['时间序列', '分类数据', '相关矩阵', '地理数据'], answer: '相关矩阵', explanation: '热力图非常适合显示相关矩阵。' },
        { id: 10, question: 'plt.show()的作用是？', options: ['保存图片', '显示图片', '创建画布', '添加图例'], answer: '显示图片', explanation: 'plt.show()用于显示绘制的图形。' }
      ],
      trueFalse: [
        { id: 1, question: '饼图越多越好，越详细越好。', answer: false, explanation: '饼图类别过多会难以阅读，一般不超过7-8个类别。' },
        { id: 2, question: 'y轴不一定要从0开始。', answer: true, explanation: '根据数据特点，有时可以不从0开始，但需要明确标注。' },
        { id: 3, question: '颜色越多图表越美观。', answer: false, explanation: '颜色应适度，过多颜色会造成视觉干扰。' },
        { id: 4, question: '折线图可以同时显示多条线。', answer: true, explanation: '折线图可以在同一坐标系中显示多条线进行比较。' },
        { id: 5, question: 'Seaborn的样式比Matplotlib更美观。', answer: true, explanation: 'Seaborn提供了更美观的默认样式。' },
        { id: 6, question: '图表标题可有可无。', answer: false, explanation: '图表标题是重要组成部分，帮助读者理解图表内容。' },
        { id: 7, question: '图例可以放在图表外面。', answer: true, explanation: '图例可以放在图表的不同位置，包括外部。' },
        { id: 8, question: '直方图的柱子宽度是固定的。', answer: true, explanation: '直方图的柱子宽度通常是相等的。' },
        { id: 9, question: '3D图表一定比2D图表好。', answer: false, explanation: '3D图表有时会造成视觉误解，2D图表通常更清晰。' },
        { id: 10, question: '数据可视化只是为了好看。', answer: false, explanation: '数据可视化主要目的是帮助理解数据、发现规律。' }
      ],
      coding: {
        title: '绘制简单柱状图',
        description: '编写一个函数，接收类别和数值列表，打印简单的文本柱状图。',
        starterCode: 'def plot_bar(categories, values):\n    # 在这里编写你的代码\n    pass\n\n# 测试示例\ncategories = ["A", "B", "C", "D"]\nvalues = [10, 20, 15, 25]\nplot_bar(categories, values)',
        testCases: [
          { input: 'categories = ["A", "B"], values = [10, 20]', expectedOutput: '文本柱状图' }
        ],
        solutionCode: 'def plot_bar(categories, values):\n    max_val = max(values) if values else 1\n    # 简单的文本柱状图\n    for cat, val in zip(categories, values):\n        bar_length = int(val / max_val * 50)  # 缩放到50字符宽度\n        bar = "█" * bar_length\n        print(f"{cat}: {bar} {val}")\n\n# 测试示例\ncategories = ["A", "B", "C", "D"]\nvalues = [10, 20, 15, 25]\nplot_bar(categories, values)',
        explanation: '将数值缩放到合适宽度，用方块字符绘制简单的文本柱状图。'
      }
    },
    solution: {
      multipleChoice: [
        { id: 1, correctAnswer: 'plt.figure()', explanation: 'plt.figure()用于创建新的画布。', keyPoints: ['plt.figure()', '画布创建'] },
        { id: 2, correctAnswer: '折线图', explanation: '折线图适合显示随时间变化的趋势。', keyPoints: ['折线图', '趋势显示'] },
        { id: 3, correctAnswer: '柱状图', explanation: '柱状图适合比较不同类别的大小。', keyPoints: ['柱状图', '类别比较'] },
        { id: 4, correctAnswer: 'Matplotlib', explanation: 'Seaborn是基于Matplotlib的高级可视化库。', keyPoints: ['Seaborn', 'Matplotlib'] },
        { id: 5, correctAnswer: '分布', explanation: '直方图用于显示数据的分布情况。', keyPoints: ['直方图', '分布显示'] },
        { id: 6, correctAnswer: '两个变量的关系', explanation: '散点图用于显示两个变量之间的关系。', keyPoints: ['散点图', '关系显示'] },
        { id: 7, correctAnswer: '占比', explanation: '饼图用于显示各部分占总体的比例。', keyPoints: ['饼图', '占比显示'] },
        { id: 8, correctAnswer: '均值', explanation: '箱线图显示中位数、四分位数、异常值，但不直接显示均值。', keyPoints: ['箱线图', '统计量'] },
        { id: 9, correctAnswer: '相关矩阵', explanation: '热力图非常适合显示相关矩阵。', keyPoints: ['热力图', '相关矩阵'] },
        { id: 10, correctAnswer: '显示图片', explanation: 'plt.show()用于显示绘制的图形。', keyPoints: ['plt.show()', '图形显示'] }
      ],
      trueFalse: [
        { id: 1, correctAnswer: false, explanation: '饼图类别过多会难以阅读，一般不超过7-8个类别。', keyPoints: ['饼图', '类别数量'] },
        { id: 2, correctAnswer: true, explanation: '根据数据特点，有时可以不从0开始，但需要明确标注。', keyPoints: ['坐标轴', '起始点'] },
        { id: 3, correctAnswer: false, explanation: '颜色应适度，过多颜色会造成视觉干扰。', keyPoints: ['颜色', '视觉设计'] },
        { id: 4, correctAnswer: true, explanation: '折线图可以在同一坐标系中显示多条线进行比较。', keyPoints: ['折线图', '多线比较'] },
        { id: 5, correctAnswer: true, explanation: 'Seaborn提供了更美观的默认样式。', keyPoints: ['Seaborn', '样式'] },
        { id: 6, correctAnswer: false, explanation: '图表标题是重要组成部分，帮助读者理解图表内容。', keyPoints: ['标题', '图表元素'] },
        { id: 7, correctAnswer: true, explanation: '图例可以放在图表的不同位置，包括外部。', keyPoints: ['图例', '位置'] },
        { id: 8, correctAnswer: true, explanation: '直方图的柱子宽度通常是相等的。', keyPoints: ['直方图', '柱子宽度'] },
        { id: 9, correctAnswer: false, explanation: '3D图表有时会造成视觉误解，2D图表通常更清晰。', keyPoints: ['3D图表', '2D图表'] },
        { id: 10, correctAnswer: false, explanation: '数据可视化主要目的是帮助理解数据、发现规律。', keyPoints: ['数据可视化', '目的'] }
      ],
      coding: {
        solutionCode: 'def plot_bar(categories, values):\n    max_val = max(values) if values else 1\n    # 简单的文本柱状图\n    for cat, val in zip(categories, values):\n        bar_length = int(val / max_val * 50)  # 缩放到50字符宽度\n        bar = "█" * bar_length\n        print(f"{cat}: {bar} {val}")',
        explanation: '将数值缩放到合适宽度，用方块字符绘制简单的文本柱状图。',
        keyPoints: ['文本可视化', '柱状图', '缩放']
      }
    }
  }
];
