USE [Invoice]
GO

/****** Object:  Table [dbo].[Invoice]    Script Date: 5/5/2567 4:31:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Invoice](
	[TransactionId] [nvarchar](50) NOT NULL,
	[Amount] [decimal](18, 4) NOT NULL,
	[CurrencyCode] [nvarchar](3) NOT NULL,
	[TransactionDate] [datetime] NOT NULL,
	[Status] [nvarchar](1) NOT NULL,
 CONSTRAINT [PK_Invoice] PRIMARY KEY CLUSTERED 
(
	[TransactionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

