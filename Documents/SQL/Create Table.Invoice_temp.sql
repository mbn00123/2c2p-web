USE [Invoice]
GO

/****** Object:  Table [dbo].[Invoice_temp]    Script Date: 5/5/2567 15:45:56 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Invoice_temp](
	[uuid] [nvarchar](50) NOT NULL,
	[TransactionId] [nvarchar](50) NOT NULL,
	[Amount] [decimal](18, 4) NOT NULL,
	[CurrencyCode] [nvarchar](3) NOT NULL,
	[TransactionDate] [datetime] NOT NULL,
	[Status] [nvarchar](1) NOT NULL
) ON [PRIMARY]
GO

