<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<title>登陆</title>
		<style>
			@charset "utf-8";
			*{margin: 0; padding: 0; font-family: "microsoft yahei";}
			body,html{width: 100%;background-color: #F0F0F0;}
			.head{
				height: 50px;
				line-height: 50px;
				text-align:center;
				background-color: #F7F7F8;
				font-size: 18px;
				border-bottom: 1px solid #C8C8C8;
				color: #000;
			}
			.userInfo{
				margin: 20px 0;
				background-color: #fff;
			}
			.userInfo .mlogin{
				display: -webkit-box;
			    display: -webkit-flex;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    border-bottom: 1px solid #DDD;
			    padding: 10px 15px;
			    color: #6C6C6C;
			    text-align: left;
			}
			.userInfo .mlogin .label{width: 5em;}
			.field-control{
				-webkit-box-flex: 1;
   				-webkit-flex: 1;
   				font-size: 16px;
			}
			input{
				font-size: 14px;
				-webkit-appearance: none;
			    width: 100%;
			    padding: 0;
			    border: 0;
			    background-color: transparent;
			    -webkit-user-select: text;
    			cursor: auto;
    			text-rendering: auto;
			    color: initial;
			    letter-spacing: normal;
			    word-spacing: normal;
			    text-transform: none;
			    text-indent: 0px;
			    text-shadow: none;
			    display: inline-block;
			    text-align: start;
			    outline: #000;
			}
			.submit{
				width: 94%;
				margin: 0 3%;
			    height: 40px;
			    line-height: 40px;
			    border: 1px solid #f40;
			    border-radius: 5px;
			    color: #fff;
			    background-color: #f40;
			    text-align: center;
			    font-size: 18px;
			    display: block;
			    text-decoration: none;
			}
		</style>
	</head>
	<body>
		<div class="head">智能社账户登陆</div>
		<form action="login" method="get">
		<div class="userInfo">
			<div class="mlogin">
				<div class="label">登陆</div>
				<div class="field-control">
					<input type="text" class="input-required" name="username" placeholder="手机号/邮箱/会员名" value="" id="username">
				</div>
			</div>
			<div class="mlogin">
	            <div class="label">登录密码</div>
	            <div class="field-control">
	                <input type="password" class="input-required" name="password" placeholder="请输入密码" value="" id="password">
	            </div>
            </div>
        </div>
        <input type="submit" value="提交"/>
        </form>
        <a href="<%=request.getContextPath() %>/htmls/123.html" >测试</a>
	</body>
</html>
