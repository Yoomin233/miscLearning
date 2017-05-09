#### general
自动补全: `tab`
终止当前程序: `ctrl + c`
输入结束/exit: `ctrl + d`

查看帮助(man page): `man command`, 例如`man date`. man for manual.
	`man command`后面第一行出现的`command(num)`中的`num`代表命令的类型:
		1: shell中的命令/executable
		5: 配置文件
		8: 系统管理员可用的管理命令
	在man page中可以通过输入`/word`来向下查找关键字, `?word`向上查找关键字, `n/N`向上/向下查找下一个关键字
查看帮助(info): `info command`, 将帮助信息组织化

#### useful commands
command: `date` 显示当前时间
	格式化输出: `date +%Y/%m/%d`, 更多见date usage
command: `cal`显示日历
	显示某个月日历: `cal [[month]year]`, 例如`cal 09 2017`
command: `bc`调出计算器
command: `echo $LANG`显示当前语言, `LANG=en_US`修改当前session的语言

command: `shutdown`执行关机/重启操作
command: `cat`读出纯文本文件
command: `- / cd -`回到上一个working dir
