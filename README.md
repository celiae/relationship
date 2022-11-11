# Relationship

还担心想不起来长辈，朋友的称呼. 哼~

人际关系信息系统。记录用户自己的亲朋好友的基础信息，随时随地查阅和自己相关人的信息。

## 开发部署

### 下载源代码

```bash
git clone https://github.com/celiae/relationship
```

### 目录结构

```bash
cd relationship
```

- database 测试数据库
- relationship 后端代码
- f_relationship 前端代码

### 加载数据库

### 启动后端 springboot

在 `relationship` 下打开第一个终端

```bash
./mvnw clean spring-boot:run
```

#### 终端输出

最后一句 `JVM running for` 代表成功执行

```bash
2022-11-05 15:06:36.162  INFO 10347 --- [  restartedMain] c.relationship.RelationshipApplication   : Starting RelationshipApplication using Java 17.0.5 on kuafu with PID 10347 (/home/celiae/Templates/relationship/relationship/target/classes started by celiae in /home/celiae/Templates/relationship/relationship)
2022-11-05 15:06:36.164  INFO 10347 --- [  restartedMain] c.relationship.RelationshipApplication   : No active profile set, falling back to 1 default profile: "default"
2022-11-05 15:06:36.206  INFO 10347 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2022-11-05 15:06:36.206  INFO 10347 --- [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2022-11-05 15:06:36.600  INFO 10347 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2022-11-05 15:06:36.642  INFO 10347 --- [  restartedMain] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 33 ms. Found 1 JPA repository interfaces.
2022-11-05 15:06:37.055  INFO 10347 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2022-11-05 15:06:37.064  INFO 10347 --- [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2022-11-05 15:06:37.064  INFO 10347 --- [  restartedMain] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.68]
2022-11-05 15:06:37.112  INFO 10347 --- [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2022-11-05 15:06:37.112  INFO 10347 --- [  restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 906 ms
2022-11-05 15:06:37.141  INFO 10347 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2022-11-05 15:06:37.192  INFO 10347 --- [  restartedMain] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2022-11-05 15:06:37.200  INFO 10347 --- [  restartedMain] o.s.b.a.h2.H2ConsoleAutoConfiguration    : H2 console available at '/h2-console'. Database available at 'jdbc:mariadb://localhost/relationship?user=celiae&password=***'
2022-11-05 15:06:37.323  INFO 10347 --- [  restartedMain] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2022-11-05 15:06:37.357  INFO 10347 --- [  restartedMain] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 5.6.12.Final
2022-11-05 15:06:37.465  INFO 10347 --- [  restartedMain] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.1.2.Final}
2022-11-05 15:06:37.543  INFO 10347 --- [  restartedMain] org.hibernate.dialect.Dialect            : HHH000400: Using dialect: org.hibernate.dialect.MariaDB106Dialect
2022-11-05 15:06:37.860  INFO 10347 --- [  restartedMain] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
2022-11-05 15:06:37.866  INFO 10347 --- [  restartedMain] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2022-11-05 15:06:38.158  WARN 10347 --- [  restartedMain] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
2022-11-05 15:06:38.365  INFO 10347 --- [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2022-11-05 15:06:38.386  INFO 10347 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2022-11-05 15:06:38.395  INFO 10347 --- [  restartedMain] c.relationship.RelationshipApplication   : Started RelationshipApplication in 2.47 seconds (JVM running for 2.918)

```

### 启动前端 next.js

在 `f_relationship` 下打开二个终端

#### 下载依赖

```bash
npm install
```

#### 启动前端

```bash
npm run dev
```
