//因为在数组中是存储相同类型的元素的集合，那么就只能存储相同类型的值
//如果需要存储不同类型的值的话，那么就需要使用到元组
//用法也很简单
let data1: [string, number] = ['开课吧', 1];
//可以添加指定了的类型
data1.push(110);
//但是不能添加未指定的类型

data1.push(true);