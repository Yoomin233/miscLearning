command: `ls -al`详细显示出当前目录下的所有文件(-a for all entries, including .*.*, -l for long outoput)
	内容解析: 
	```
	drwxr-xr-x  8 douqiangmian  staff  272  5  6 10:22 ..
	-rw-r--r--  1 douqiangmian  staff   56  5  6 10:48 chapter5.md
		||		||	||			 ||		||		||			||		
		权限	  连接数 所有者		所有组	大小		最后修改日期	文件名
	```
	权限解析:
	```
	drwxr-xr-x
	文件类型 - 所有者权限 - 用户组权限 - 其他人权限
	rwx分别表示read, write, execuate
	```
	如果是目录, 则需要具有`x`权限才能进入该目录(切换成为工作目录). 而目录的`w`权限则很重要, 有了它可以创建删除目录下文件, 改变目录结构等. 

command: 改变文件的用户/组: `chown options user:group files ...`
command: 改变用户权限: `chmod`. 指定方式有两种, 数字方式和指令方式, 详见`man chmod`