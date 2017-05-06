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
	如果是目录, 则需要具有`x`权限才能进入该目录

command: 改变