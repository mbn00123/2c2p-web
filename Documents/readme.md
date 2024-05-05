Project Architecture
	
         [Frontend]			               [API] 			           [DATABASE]
+----------------------+         +-----------------------+         +------------------+
|                      |  HTTP   |                       |  QUERY  |                  |
|   Angular Material   <--------->    C# .NET Core (7)   <--------->      MSSQL       |
|        v17           |  JSON   |    ENtity Framework   |  Data   |                  |
|                      |         |                       |         |                  |
+----------------------+         +-----------------------+         +------------------+