import{_ as e,o as n,c as t,h as r}from"./app.7441af00.js";const C=JSON.parse('{"title":"HTTP的小结","description":"","frontmatter":{"date":"2018-02-06","title":"HTTP的小结","author":"Younglina","categories":["文档"],"tags":["记录"]},"headers":[{"level":2,"title":"TCP/IP","slug":"tcp-ip","link":"#tcp-ip","children":[]},{"level":2,"title":"URI 和 URL","slug":"uri-和-url","link":"#uri-和-url","children":[]},{"level":2,"title":"HTTP","slug":"http","link":"#http","children":[{"level":3,"title":"工作原理","slug":"工作原理","link":"#工作原理","children":[]},{"level":3,"title":"HTTP 协议","slug":"http-协议","link":"#http-协议","children":[]},{"level":3,"title":"持久连接","slug":"持久连接","link":"#持久连接","children":[]},{"level":3,"title":"请求方法","slug":"请求方法","link":"#请求方法","children":[]},{"level":3,"title":"状态码含义","slug":"状态码含义","link":"#状态码含义","children":[]}]}],"relativePath":"write/docs/http.md","lastUpdated":1662613821000}'),i={name:"write/docs/http.md"},a=r(`<h2 id="tcp-ip" tabindex="-1">TCP/IP <a class="header-anchor" href="#tcp-ip" aria-hidden="true">#</a></h2><pre><code>互联网相关的各类协议族的总称
协议族按层次分别分为以下 4  层：
</code></pre><p>应用层、传输层、网络层和数据链路层。 1. IP(网际协议，位于网络层) 负责传输 将各种数据包传输给对方，为了确保数据确实的传送，需要满足各类条件，其中两个重要的条件就是 IP 地址和 MAC( Media Access Control)地址 IP 地址指明了节点被分配的地址，MAC 地址是指网卡所属于的固定地址。 IP 间的通信依赖 MAC 地址，在通信过程中会使用 ARP 协议( Address Resolution Protocol 一种用以解析地址的协议)根据通信方的 IP 地址反查出对应的 MAC 地址 2.TCP(位于传输层) 确保可靠性 TCP 提供可靠的字节流服务，将大块数据分割成以报文段为单位的数据包。 TCP 协议采用了三次握手（ three-way handshaking ）策略： （1）发送端首先发送一个带 SYN 标志的数据包给对方。 （2）接收端收到后，回传一个带有 SYN/ACK 标志的数据包以示传达确认信息。 （3）最后，发送端再回传一个带 ACK 标志的数据包，代表 “ 握手 ” 结束。 3. DNS 服务(位于应用层) 负责域名解析 在平时访问过程中，一般都是通过使用主机名或域名进行访问，而不是通过 IP 地址直接访问，但要让计算机去理解名称，就变得困难了。 为了解决上述的问题， DNS 服务应运而生。 DNS 协议提供通过域名查找 IP 地址，或逆向从 IP 地址反查域名</p><h2 id="uri-和-url" tabindex="-1">URI 和 URL <a class="header-anchor" href="#uri-和-url" aria-hidden="true">#</a></h2><pre><code>URI 统一资源标识符,由某个协议方案表示的资源的定位标识符。协议方案是指访问资源所使用的协议类型名 称。
URL  统一资源定位符,表示资源的地点（互联网上所处的位置） URL  是 URI  的子集
</code></pre><h2 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-hidden="true">#</a></h2><h3 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-hidden="true">#</a></h3><pre><code>一次HTTP操作称为一个事务，其工作整个过程如下：

1. 地址解析
如用客户端浏览器请求这个页面：#3
从中分解出协议名、主机名、端口、对象路径等部分，对于我们的这个地址，解析得到的结果如下：
协议名：https
主机名：github.com
端口：&#39;&#39;
对象路径：/zoro-web/blog/issues/3
在这一步，需要域名系统DNS解析域名github.com，得主机的IP地址。

2. 封装HTTP请求数据包
把以上部分结合本机自己的信息，封装成一个HTTP请求数据包

3. 封装成TCP包，建立TCP连接（TCP的三次握手）
在HTTP工作开始之前，客户机（Web浏览器）首先要通过网络与服务器建立连接，该连接是通过TCP来完成的，该协议与IP协议共同构建Internet，即著名的TCP/IP协议族，因此Internet又被称作是TCP/IP网络。HTTP是比TCP更高层次的应用层协议，根据规则，只有低层协议建立之后才能，才能进行更层协议的连接，因此，首先要建立TCP连接，一般TCP连接的端口号是80。
TCP的三次握手
(1) 主机向服务器发送一个建立连接的请求；

(2) 服务器接到请求后发送同意连接的信号；(为了防止已失效的连接请求报文段传至服务器导致错误)

(3) 主机接到同意连接的信号后，再次向服务器发送了确认信号 ;


4. 客户机发送请求命令
建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号，后边是MIME信息包括请求修饰符、客户机信息和内容。

5. 服务器响应
服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。
实体消息是服务器向浏览器发送头信息后，它会发送一个空白行来表示头信息的发送到此为结束，接着，它就以Content-Type应答头信息所描述的格式发送用户所请求的实际数据

6. 服务器关闭TCP连接
一般情况下，一旦Web服务器向浏览器发送了请求数据，它就要关闭TCP连接，然后如果浏览器或者服务器在其头信息加入了这个请求头Connection:keep-alive，TCP连接在发送后将仍然保持打开状态，于是，浏览器可以继续通过相同的连接发送请求。保持连接节省了为每个请求建立新连接所需的时间，还节约了网络带宽。
断开连接(TCP的四次挥手)
(1) 主机向服务器发送一个断开连接的请求；

(2) 服务器接到请求后发送确认收到请求的信号；(此时服务器可能还有数据要发送至主机)

(3) 服务器向主机发送断开通知；(此时服务器确认没有要向主机发送的数据)

(4) 主机接到断开通知后断开连接并反馈一个确认信号，服务器收到确认信号后断开连接；

用于客户端和服务器，通过请求响应达成通信：
请求报文是由请求方法、请求 URI 、协议版本、可选的请求首部字段和内容实体构成的。
GET /index.htm HTTP/1.1 请求访问某台服务器上/index.html的页面资源

HTTP/1.1 200 OK
Date: Tue, 10 Jul 2012 06:50:15 GMT
Content-Length: 362
Content-Type: text/html
&lt;html&gt;
……
响应报文基本上由协议版本、状态码（表示请求成功或失败的数字代码）、用以解释状态码的原因短语、可
选的响应首部字段以及实体主体构成。
</code></pre><h3 id="http-协议" tabindex="-1">HTTP 协议 <a class="header-anchor" href="#http-协议" aria-hidden="true">#</a></h3><pre><code>协议自身不具备保存之前发送过的请求或响应的功能
优点：由于不必保存状态，自然可减少服务器的 CPU  及内存资源的消耗。
使用Cookie状态管理： Cookie  技术通过在请求和响应报文中写入 Cookie  信息来控制客户端的状态。
Cookie  会根据从服务器端发送的响应报文内的一个叫做 Set-Cookie  的首部字段信息，通知客户端保存
Cookie 。当下次客户端再往该服务器发送请求时，客户端会自动在请求报文中加入 Cookie  值后发送出去。
服务器端发现客户端发送过来的 Cookie  后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务
器上的记录，最后得到之前的状态信息。
    HTTP协议使用 URI  定位互联网上的资源。
</code></pre><h3 id="持久连接" tabindex="-1">持久连接 <a class="header-anchor" href="#持久连接" aria-hidden="true">#</a></h3><pre><code>持久连接节省通信量
HTTP  协议的初始版本中，每进行一次 HTTP  通信就要断开一次 TCP  连接，为解决TCP  连接的问题， HTTP/1.1  和一部分的 HTTP/1.0  想出了
持久连接（ HTTP PersistentConnections ，也称为 HTTP keep-alive  或 HTTP connection reuse ）的方法。持久连接的特点是，只要任意
一端没有明确提出断开连接，则保持 TCP  连接状态。旨在建立 1  次 TCP  连接后进行多次请求和响应的交互
</code></pre><h3 id="请求方法" tabindex="-1">请求方法 <a class="header-anchor" href="#请求方法" aria-hidden="true">#</a></h3><pre><code>1、GET方法
发送一个请求来取得服务器上的某一资源

2、POST方法
向URL指定的资源提交数据或附加新的数据

3、PUT方法
跟POST方法很像，也是想服务器提交数据。但是，它们之间有不同。PUT指定了资源在服务器上的位置，而POST没有

4、HEAD方法
只请求页面的首部

5、DELETE方法
删除服务器上的某资源

6、OPTIONS方法
它用于获取当前URL所支持的方法。如果请求成功，会有一个Allow的头包含类似“GET,POST”这样的信息

7、TRACE方法
TRACE方法被用于激发一个远程的，应用层的请求消息回路

8、CONNECT方法
把请求连接转换到透明的TCP/IP通道
</code></pre><h3 id="状态码含义" tabindex="-1">状态码含义 <a class="header-anchor" href="#状态码含义" aria-hidden="true">#</a></h3><pre><code>1XX：信息状态码
100 Continue 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息

2XX：成功状态码
200 OK 正常返回信息
201 Created 请求成功并且服务器创建了新的资源
202 Accepted 服务器已接受请求，但尚未处理

3XX：重定向
301 Moved Permanently 请求的网页已永久移动到新位置。
302 Found 临时性重定向。
303 See Other 临时性重定向，且总是使用 GET 请求新的 URI。
304 Not Modified 自从上次请求后，请求的网页未修改过。

4XX：客户端错误
400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
401 Unauthorized 请求未授权。
403 Forbidden 禁止访问。
404 Not Found 找不到如何与 URI 相匹配的资源。

5XX: 服务器错误
500 Internal Server Error 最常见的服务器端错误。
503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
</code></pre>`,16),o=[a];function d(T,h,l,c,P,s){return n(),t("div",null,o)}const u=e(i,[["render",d]]);export{C as __pageData,u as default};
