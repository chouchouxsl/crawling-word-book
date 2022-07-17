# crawling-word-book

---

## Description

获取[qwerty-learner](https://github.com/Kaiyiwing/qwerty-learner)数据 转换成不背单词需要的格式 导入单词本中 使用 `不背单词APP` 方便随时背单词

## Used


```javascript
// <...>中动态传入name值  name参数参考下列数据

node index.js --name <name>
```

### 数据参考 
 **name**           | **description**                       | **category** | **alias**                             
--------------------|---------------------------------------|--------------|---------------------------------------
 CET-4              | 大学英语四级词库                              | 英语学习         | CET4_T                                
 CET-6              | 大学英语六级词库                              | 英语学习         | CET6_T                                
 GMAT               | GMAT 词库                               | 英语学习         | GMAT_3_T                              
 GRE                | GRE 词库                                | 英语学习         | GRE_3_T                               
 IELTS              | 雅思词库                                  | 英语学习         | IELTS_3_T                             
 考研                 | 研究生英语入学考试词库                           | 英语学习         | KaoYan_3_T                            
 专四                 | 英语专业四级词库                              | 英语学习         | Level4luan_2_T                        
 专八                 | 英语专业八级词库                              | 英语学习         | Level8luan_2_T                        
 高考 3500 词          | 高考常见词 3500                            | 英语学习         | GaoKao_3500                           
 SAT                | 美国 SAT 考试词库                           | 英语学习         | SAT_3_T                               
 TOEFL              | 托福考试常见词                               | 英语学习         | TOEFL_3_T                             
 商务英语               | 商务英语常见词                               | 英语学习         | BEC_2_T                               
 BEC                | BEC考试常见词                              | 英语学习         | BEC_3_T                               
 Coder Dict         | 程序员常见单词词库                             | 代码练习         | it-words                              
 JS: Array          | JavaScript API 词典                     | 代码练习         | js-array                              
 JS: Date           | JavaScript API 词典                     | 代码练习         | js-date                               
 JS: Global         | JavaScript API 词典                     | 代码练习         | js-global                             
 JS: Map & Set      | JavaScript API 词典                     | 代码练习         | js-map-set                            
 JS: Math           | JavaScript API 词典                     | 代码练习         | js-math                               
 JS: Number         | JavaScript API 词典                     | 代码练习         | js-number                             
 JS: Object         | JavaScript API 词典                     | 代码练习         | js-object                             
 JS: Promise        | JavaScript API 词典                     | 代码练习         | js-promise                            
 JS: String         | JavaScript API 词典                     | 代码练习         | js-string                             
 Python: Built-in   | Python Built-in API                   | 代码练习         | python-builtin                        
 Python: array      | Python array API                      | 代码练习         | python-array                          
 Python: date       | Python date API                       | 代码练习         | python-date                           
 Python: file       | Python file API                       | 代码练习         | python-file                           
 Python: class      | Python class API                      | 代码练习         | python-class                          
 Python: set        | Python set API                        | 代码练习         | python-set                            
 Python: math       | Python math API                       | 代码练习         | python-math                           
 Python: string     | Python string API                     | 代码练习         | python-string                         
 Python: system     | Python system API                     | 代码练习         | python-sys                            
 Java: ArrayList    | JavaScript API 词典                     | 代码练习         | java-arraylist                        
 Java: Character    | JavaScript API 词典                     | 代码练习         | java-character                        
 Java: Hashmap      | JavaScript API 词典                     | 代码练习         | java-hashmap                          
 Java: LinkedList   | JavaScript API 词典                     | 代码练习         | java-linkedlist                       
 Java: String       | JavaScript API 词典                     | 代码练习         | java-string                           
 Java: StringBuffer | JavaScript API 词典                     | 代码练习         | java-stringBuffer                     
 Linux              | Linux Command                         | 代码练习         | linux-command                         
 C#: List API       | C# List API                           | 代码练习         | csharp-list                           
 三年级上               | 人教版三年级上册                              | 人教版英语        | PEPXiaoXue3_1_T                       
 三年级下               | 人教版三年级下册                              | 人教版英语        | PEPXiaoXue3_2_T                       
 四年级上               | 人教版四年级上册                              | 人教版英语        | PEPXiaoXue4_1_T                       
 四年级下               | 人教版四年级下册                              | 人教版英语        | PEPXiaoXue4_2_T                       
 五年级上               | 人教版五年级上册                              | 人教版英语        | PEPXiaoXue5_1_T                       
 五年级下               | 人教版五年级下册                              | 人教版英语        | PEPXiaoXue5_2_T                       
 六年级上               | 人教版六年级上册                              | 人教版英语        | PEPXiaoXue6_1_T                       
 六年级下               | 人教版六年级下册                              | 人教版英语        | PEPXiaoXue6_2_T                       
 七年级上               | 人教版七年级上册                              | 人教版英语        | PEPChuZhong7_1_T                      
 七年级下               | 人教版七年级下册                              | 人教版英语        | PEPChuZhong7_2_T                      
 八年级上               | 人教版八年级上册                              | 人教版英语        | PEPChuZhong8_1_T                      
 八年级下               | 人教版八年级下册                              | 人教版英语        | PEPChuZhong8_2_T                      
 九年级                | 人教版九年级全册                              | 人教版英语        | PEPChuZhong9_1_T                      
 高中必修1              | 人教版高中必修1                              | 人教版英语        | PEPGaoZhong_1_T                       
 高中必修2              | 人教版高中必修2                              | 人教版英语        | PEPGaoZhong_2_T                       
 高中必修3              | 人教版高中必修3                              | 人教版英语        | PEPGaoZhong_3_T                       
 高中必修4              | 人教版高中必修4                              | 人教版英语        | PEPGaoZhong_4_T                       
 高中必修5              | 人教版高中必修5                              | 人教版英语        | PEPGaoZhong_5_T                       
 高中选修6              | 人教版高中选修6                              | 人教版英语        | PEPGaoZhong_6_T                       
 高中选修7              | 人教版高中选修7                              | 人教版英语        | PEPGaoZhong_7_T                       
 高中选修8              | 人教版高中选修8                              | 人教版英语        | PEPGaoZhong_8_T                       
 高中选修9              | 人教版高中选修9                              | 人教版英语        | PEPGaoZhong_9_T                       
 高中选修10             | 人教版高中选修10                             | 人教版英语        | PEPGaoZhong_10_T                      
 高中选修11             | 人教版高中选修11                             | 人教版英语        | PEPGaoZhong_11_T                      
 新概念英语-1            | 新概念英语第一册                              | 新概念英语        | NCE_1                                 
 新概念英语-2            | 新概念英语第二册                              | 新概念英语        | NCE_2                                 
 新概念英语-3            | 新概念英语第三册                              | 新概念英语        | NCE_3                                 
 新概念英语-4            | 新概念英语第四册                              | 新概念英语        | NCE_4                                 
 外研七年级上册            | 外研版七年级上册                              | 外研版英语        | WaiYanSheChuZhong_1_T                 
 外研七年级下册            | 外研版七年级下册                              | 外研版英语        | WaiYanSheChuZhong_2_T                 
 外研八年级上册            | 外研版八年级上册                              | 外研版英语        | WaiYanSheChuZhong_3_T                 
 外研八年级下册            | 外研版八年级下册                              | 外研版英语        | WaiYanSheChuZhong_4_T                 
 外研九年级上册            | 外研版九年级上册                              | 外研版英语        | WaiYanSheChuZhong_5_T                 
 外研九年级下册            | 外研版九年级下册                              | 外研版英语        | WaiYanSheChuZhong_6_T                 
 高中必修1              | 北师大版高中必修1                             | 北师大版英语       | BeiShiGaoZhong_1_T                    
 高中必修2              | 北师大版高中必修2                             | 北师大版英语       | BeiShiGaoZhong_2_T                    
 高中必修3              | 北师大版高中必修3                             | 北师大版英语       | BeiShiGaoZhong_3_T                    
 高中必修4              | 北师大版高中必修4                             | 北师大版英语       | BeiShiGaoZhong_4_T                    
 高中必修5              | 北师大版高中必修5                             | 北师大版英语       | BeiShiGaoZhong_5_T                    
 高中选修6              | 北师大版高中选修6                             | 北师大版英语       | BeiShiGaoZhong_6_T                    
 高中选修7              | 北师大版高中选修7                             | 北师大版英语       | BeiShiGaoZhong_7_T                    
 高中选修8              | 北师大版高中选修8                             | 北师大版英语       | BeiShiGaoZhong_8_T                    
 高中选修9              | 北师大版高中选修9                             | 北师大版英语       | BeiShiGaoZhong_9_T                    
 高中选修10             | 北师大版高中选修10                            | 北师大版英语       | BeiShiGaoZhong_10_T                   
 高中选修11             | 北师大版高中选修11                            | 北师大版英语       | BeiShiGaoZhong_11_T                   
 SAT en-en          | SAT英英                                 | en2en        | SATen                                 
 Essential Words    | 4000 Essential English Words meaning  | en2en        | 4000 Essential English Words-meaning  
 Essential Words    | 4000 Essential English Words sentence | en2en        | 4000 Essential English Words-sentence 
 suffix word        | common suffix                         | en2en        | suffix word                           
 word roots1        | common roots                          | en2en        | word roots1                           
 日语常见词              | 日语常用单词                                | 日语学习         | Japanesebasicword                     
 N1                 | 日语N1                                  | 日语学习         | JapVocabList.N1                       
 N2                 | 日语N2                                  | 日语学习         | JapVocabList.N2                       
 N3                 | 日语N3                                  | 日语学习         | JapVocabList.N3                       
 N4                 | 日语N4                                  | 日语学习         | JapVocabList.N4                       
 N5                 | 日语N5                                  | 日语学习         | JapVocabList.N5                       

## Link

[不背单词导入地址](https://bbdc.cn/lexis_book_index)

tips: 需要注册账号 => 
自定义词书 => 将生成的词书上传即可

## Thank

This project Data from [qwerty-learner](https://github.com/Kaiyiwing/qwerty-learner) 

It is a very suitable word practice warehouse for programmers
