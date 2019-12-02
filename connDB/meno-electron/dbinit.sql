#数据库为test
use test;
#数据库初始化脚本
create table t_test(id int primary key  auto_increment,name varchar(60)) default charset = utf8 ;

insert into t_test(name) values('wallimn');
insert into t_test(name) values('superman');
insert into t_test(name) values('batman');
insert into t_test(name) values('warrior');
insert into t_test(name) values('spur');
insert into t_test(name) values('boat');

drop table t_menu;
create table t_menu(
    id int primary key auto_increment,
    tree_id int ,
    tree_pid int, 
    title varchar(60), 
    url varchar(255),
    target varchar(60), 
    icon varchar(255),
    remark varchar(255)
) default charset = utf8 ;

insert into t_menu(tree_id,tree_pid,title,url,target,icon,remark)
values(1,0,'系统管理','about:blank','main',null,null);

insert into t_menu(tree_id,tree_pid,title,url,target,icon,remark)
values(2,1,'用户管理','about:blank','main',null,null);

insert into t_menu(tree_id,tree_pid,title,url,target,icon,remark)
values(3,1,'角色管理','about:blank','main',null,null);

insert into t_menu(tree_id,tree_pid,title,url,target,icon,remark)
values(4,1,'功能管理','about:blank','main',null,null);

insert into t_menu(tree_id,tree_pid,title,url,target,icon,remark)
values(5,0,'业务管理','about:blank','main',null,null);

insert into t_menu(tree_id,tree_pid,title,url,target,icon,remark)
values(6,5,'JAVA业务','about:blank','main',null,null);

insert into t_menu(tree_id,tree_pid,title,url,target,icon,remark)
values(7,5,'JavaScript业务','about:blank','main',null,null);

insert into t_menu(tree_id,tree_pid,title,url,target,icon,remark)
values(8,5,'C#业务','about:blank','main',null,null);







