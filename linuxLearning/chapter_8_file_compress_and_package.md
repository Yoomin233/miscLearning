`*.gz`表示`gzip`压缩过的文件, `*.tar`表示打包过的文件包, `*.tar.gz`表示打包并且经过`gzip`压缩过的文件包.
gzip用来压缩/解压缩文件
  压缩文件: `gzip -v -num -c fileName > zipName`
  解压缩文件: `gzip -d zippedFile`
  查看压缩文件内容: `zcat zippedFile`

bzip的压缩比更好
  压缩文件: `bzip2 -9 -c fileName > zippedFile`
  解压缩: `bzip2 -d zippedFile`
  查看压缩文件内容: `bzcat zippedFile`

tar用来打包文件为一个包
  打包+压缩文件为arvhiveFile: `tar -z(gzip, -j for bzip2)c(create)v(display filename) -f arvhiveFile __exclude=FILE filename`
  解包+解压缩文件: `tar -z(gzip, -j for bzip2)x(extract)v(display filename) -f archiveFile -C(指定解压到) toWhichDir`, 例子: `tar -zx -f temp.tar.gz -C ./temp`
  只解包包中的单一文件: `tar -zxv -f archiveFile fileName`
  查看压缩包内容: `tar -z(for zip)t(查看)v(display filename) -f archiveFile`
  `-p`参数保留原本的属性与权限, `-P`保留绝对路径, `--exclude=FILE`排除某些文件, `--newer-mtime='time'`只备份较新的文件
  打包的文件被称为`tarfile`, 打包并压缩的文件被称为`tarball`

dd将整个设备读取为一个扇区
  
