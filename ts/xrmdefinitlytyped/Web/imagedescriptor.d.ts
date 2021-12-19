interface ImageDescriptor_Base extends WebEntity {
  colordepthbits?: number | null;
  filelocation?: string | null;
  filename?: string | null;
  filesizebytes?: number | null;
  filetype?: string | null;
  fullimageurl?: string | null;
  imagedescription?: string | null;
  imagedescriptorid?: string | null;
  imagepixelheight?: number | null;
  imagepixelwidth?: number | null;
  imagetags?: string | null;
  imagetimestamp?: number | null;
  imageurl?: string | null;
  mimetype?: string | null;
  objectid?: string | null;
  objecttypecode?: string | null;
  size?: number | null;
  title?: string | null;
  versionnumber?: number | null;
}
interface ImageDescriptor_Relationships {
  FileId?: FileAttachment_Result | null;
  ImageDescriptor_Template?: Template_Result[] | null;
  ImageDescriptor_connector_IconBlob?: connector_Result[] | null;
  ImageDescriptor_msdyn_3dmodel?: msdyn_3dmodel_Result[] | null;
  ImageDescriptor_msdyn_AIBFile_msdyn_Image?: msdyn_AIBFile_Result[] | null;
  ImageDescriptor_msdyn_AIOdImage?: msdyn_AIOdImage_Result[] | null;
  ImageDescriptor_msdyn_bookableresourcebookingquicknote_msdyn_image?: msdyn_bookableresourcebookingquicknote_Result[] | null;
  ImageDescriptor_msdyn_customerassetattachment_msdyn_Image?: msdyn_customerassetattachment_Result[] | null;
  ImageDescriptor_msdyn_kbattachment_msdyn_fileicon?: msdyn_kbattachment_Result[] | null;
  ImageDescriptor_msdyn_richtextfile_msdyn_imageblob?: msdyn_richtextfile_Result[] | null;
  imagedescriptor_FileAttachments?: FileAttachment_Result[] | null;
  lk_account_entityimage?: Account_Result[] | null;
  lk_campaign_entityimage?: Campaign_Result[] | null;
  lk_competitor_entityimage?: Competitor_Result[] | null;
  lk_connection_entityimage?: Connection_Result[] | null;
  lk_contact_entityimage?: Contact_Result[] | null;
  lk_contract_entityimage?: Contract_Result[] | null;
  lk_emailserverprofile_entityimage?: EmailServerProfile_Result[] | null;
  lk_goal_entityimage?: Goal_Result[] | null;
  lk_incident_entityimage?: Incident_Result[] | null;
  lk_invoice_entityimage?: Invoice_Result[] | null;
  lk_kbarticle_entityimage?: KbArticle_Result[] | null;
  lk_lead_entityimage?: Lead_Result[] | null;
  lk_mailbox_entityimage?: Mailbox_Result[] | null;
  lk_opportunityproduct_entityimage?: OpportunityProduct_Result[] | null;
  lk_organization_entityimage?: Organization_Result[] | null;
  lk_product_entityimage?: Product_Result[] | null;
  lk_publisher_entityimage?: Publisher_Result[] | null;
  lk_queue_entityimage?: Queue_Result[] | null;
  lk_resource_entityimage?: Resource_Result[] | null;
  lk_salesliterature_entityimage?: SalesLiterature_Result[] | null;
  lk_salesorder_entityimage?: SalesOrder_Result[] | null;
  lk_systemuser_entityimage?: SystemUser_Result[] | null;
  lk_territory_entityimage?: Territory_Result[] | null;
  lk_transactioncurrency_entityimage?: TransactionCurrency_Result[] | null;
  workflow_entityimage?: Workflow_Result[] | null;
}
interface ImageDescriptor extends ImageDescriptor_Base, ImageDescriptor_Relationships {
}
interface ImageDescriptor_Create extends ImageDescriptor {
}
interface ImageDescriptor_Update extends ImageDescriptor {
}
interface ImageDescriptor_Select {
  colordepthbits: WebAttribute<ImageDescriptor_Select, { colordepthbits: number | null }, {  }>;
  filelocation: WebAttribute<ImageDescriptor_Select, { filelocation: string | null }, {  }>;
  filename: WebAttribute<ImageDescriptor_Select, { filename: string | null }, {  }>;
  filesizebytes: WebAttribute<ImageDescriptor_Select, { filesizebytes: number | null }, {  }>;
  filetype: WebAttribute<ImageDescriptor_Select, { filetype: string | null }, {  }>;
  fullimageurl: WebAttribute<ImageDescriptor_Select, { fullimageurl: string | null }, {  }>;
  imagedescription: WebAttribute<ImageDescriptor_Select, { imagedescription: string | null }, {  }>;
  imagedescriptorid: WebAttribute<ImageDescriptor_Select, { imagedescriptorid: string | null }, {  }>;
  imagepixelheight: WebAttribute<ImageDescriptor_Select, { imagepixelheight: number | null }, {  }>;
  imagepixelwidth: WebAttribute<ImageDescriptor_Select, { imagepixelwidth: number | null }, {  }>;
  imagetags: WebAttribute<ImageDescriptor_Select, { imagetags: string | null }, {  }>;
  imagetimestamp: WebAttribute<ImageDescriptor_Select, { imagetimestamp: number | null }, {  }>;
  imageurl: WebAttribute<ImageDescriptor_Select, { imageurl: string | null }, {  }>;
  mimetype: WebAttribute<ImageDescriptor_Select, { mimetype: string | null }, {  }>;
  objectid: WebAttribute<ImageDescriptor_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<ImageDescriptor_Select, { objecttypecode: string | null }, {  }>;
  size: WebAttribute<ImageDescriptor_Select, { size: number | null }, {  }>;
  title: WebAttribute<ImageDescriptor_Select, { title: string | null }, {  }>;
  versionnumber: WebAttribute<ImageDescriptor_Select, { versionnumber: number | null }, {  }>;
}
interface ImageDescriptor_Filter {
  colordepthbits: number;
  filelocation: string;
  filename: string;
  filesizebytes: number;
  filetype: string;
  fullimageurl: string;
  imagedescription: string;
  imagedescriptorid: XQW.Guid;
  imagepixelheight: number;
  imagepixelwidth: number;
  imagetags: string;
  imagetimestamp: number;
  imageurl: string;
  mimetype: string;
  objectid: XQW.Guid;
  objecttypecode: string;
  size: number;
  title: string;
  versionnumber: number;
}
interface ImageDescriptor_Expand {
  FileId: WebExpand<ImageDescriptor_Expand, FileAttachment_Select, FileAttachment_Filter, { FileId: FileAttachment_Result }>;
  ImageDescriptor_Template: WebExpand<ImageDescriptor_Expand, Template_Select, Template_Filter, { ImageDescriptor_Template: Template_Result[] }>;
  ImageDescriptor_connector_IconBlob: WebExpand<ImageDescriptor_Expand, connector_Select, connector_Filter, { ImageDescriptor_connector_IconBlob: connector_Result[] }>;
  ImageDescriptor_msdyn_3dmodel: WebExpand<ImageDescriptor_Expand, msdyn_3dmodel_Select, msdyn_3dmodel_Filter, { ImageDescriptor_msdyn_3dmodel: msdyn_3dmodel_Result[] }>;
  ImageDescriptor_msdyn_AIBFile_msdyn_Image: WebExpand<ImageDescriptor_Expand, msdyn_AIBFile_Select, msdyn_AIBFile_Filter, { ImageDescriptor_msdyn_AIBFile_msdyn_Image: msdyn_AIBFile_Result[] }>;
  ImageDescriptor_msdyn_AIOdImage: WebExpand<ImageDescriptor_Expand, msdyn_AIOdImage_Select, msdyn_AIOdImage_Filter, { ImageDescriptor_msdyn_AIOdImage: msdyn_AIOdImage_Result[] }>;
  ImageDescriptor_msdyn_bookableresourcebookingquicknote_msdyn_image: WebExpand<ImageDescriptor_Expand, msdyn_bookableresourcebookingquicknote_Select, msdyn_bookableresourcebookingquicknote_Filter, { ImageDescriptor_msdyn_bookableresourcebookingquicknote_msdyn_image: msdyn_bookableresourcebookingquicknote_Result[] }>;
  ImageDescriptor_msdyn_customerassetattachment_msdyn_Image: WebExpand<ImageDescriptor_Expand, msdyn_customerassetattachment_Select, msdyn_customerassetattachment_Filter, { ImageDescriptor_msdyn_customerassetattachment_msdyn_Image: msdyn_customerassetattachment_Result[] }>;
  ImageDescriptor_msdyn_kbattachment_msdyn_fileicon: WebExpand<ImageDescriptor_Expand, msdyn_kbattachment_Select, msdyn_kbattachment_Filter, { ImageDescriptor_msdyn_kbattachment_msdyn_fileicon: msdyn_kbattachment_Result[] }>;
  ImageDescriptor_msdyn_richtextfile_msdyn_imageblob: WebExpand<ImageDescriptor_Expand, msdyn_richtextfile_Select, msdyn_richtextfile_Filter, { ImageDescriptor_msdyn_richtextfile_msdyn_imageblob: msdyn_richtextfile_Result[] }>;
  imagedescriptor_FileAttachments: WebExpand<ImageDescriptor_Expand, FileAttachment_Select, FileAttachment_Filter, { imagedescriptor_FileAttachments: FileAttachment_Result[] }>;
  lk_account_entityimage: WebExpand<ImageDescriptor_Expand, Account_Select, Account_Filter, { lk_account_entityimage: Account_Result[] }>;
  lk_campaign_entityimage: WebExpand<ImageDescriptor_Expand, Campaign_Select, Campaign_Filter, { lk_campaign_entityimage: Campaign_Result[] }>;
  lk_competitor_entityimage: WebExpand<ImageDescriptor_Expand, Competitor_Select, Competitor_Filter, { lk_competitor_entityimage: Competitor_Result[] }>;
  lk_connection_entityimage: WebExpand<ImageDescriptor_Expand, Connection_Select, Connection_Filter, { lk_connection_entityimage: Connection_Result[] }>;
  lk_contact_entityimage: WebExpand<ImageDescriptor_Expand, Contact_Select, Contact_Filter, { lk_contact_entityimage: Contact_Result[] }>;
  lk_contract_entityimage: WebExpand<ImageDescriptor_Expand, Contract_Select, Contract_Filter, { lk_contract_entityimage: Contract_Result[] }>;
  lk_emailserverprofile_entityimage: WebExpand<ImageDescriptor_Expand, EmailServerProfile_Select, EmailServerProfile_Filter, { lk_emailserverprofile_entityimage: EmailServerProfile_Result[] }>;
  lk_goal_entityimage: WebExpand<ImageDescriptor_Expand, Goal_Select, Goal_Filter, { lk_goal_entityimage: Goal_Result[] }>;
  lk_incident_entityimage: WebExpand<ImageDescriptor_Expand, Incident_Select, Incident_Filter, { lk_incident_entityimage: Incident_Result[] }>;
  lk_invoice_entityimage: WebExpand<ImageDescriptor_Expand, Invoice_Select, Invoice_Filter, { lk_invoice_entityimage: Invoice_Result[] }>;
  lk_kbarticle_entityimage: WebExpand<ImageDescriptor_Expand, KbArticle_Select, KbArticle_Filter, { lk_kbarticle_entityimage: KbArticle_Result[] }>;
  lk_lead_entityimage: WebExpand<ImageDescriptor_Expand, Lead_Select, Lead_Filter, { lk_lead_entityimage: Lead_Result[] }>;
  lk_mailbox_entityimage: WebExpand<ImageDescriptor_Expand, Mailbox_Select, Mailbox_Filter, { lk_mailbox_entityimage: Mailbox_Result[] }>;
  lk_opportunityproduct_entityimage: WebExpand<ImageDescriptor_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { lk_opportunityproduct_entityimage: OpportunityProduct_Result[] }>;
  lk_organization_entityimage: WebExpand<ImageDescriptor_Expand, Organization_Select, Organization_Filter, { lk_organization_entityimage: Organization_Result[] }>;
  lk_product_entityimage: WebExpand<ImageDescriptor_Expand, Product_Select, Product_Filter, { lk_product_entityimage: Product_Result[] }>;
  lk_publisher_entityimage: WebExpand<ImageDescriptor_Expand, Publisher_Select, Publisher_Filter, { lk_publisher_entityimage: Publisher_Result[] }>;
  lk_queue_entityimage: WebExpand<ImageDescriptor_Expand, Queue_Select, Queue_Filter, { lk_queue_entityimage: Queue_Result[] }>;
  lk_resource_entityimage: WebExpand<ImageDescriptor_Expand, Resource_Select, Resource_Filter, { lk_resource_entityimage: Resource_Result[] }>;
  lk_salesliterature_entityimage: WebExpand<ImageDescriptor_Expand, SalesLiterature_Select, SalesLiterature_Filter, { lk_salesliterature_entityimage: SalesLiterature_Result[] }>;
  lk_salesorder_entityimage: WebExpand<ImageDescriptor_Expand, SalesOrder_Select, SalesOrder_Filter, { lk_salesorder_entityimage: SalesOrder_Result[] }>;
  lk_systemuser_entityimage: WebExpand<ImageDescriptor_Expand, SystemUser_Select, SystemUser_Filter, { lk_systemuser_entityimage: SystemUser_Result[] }>;
  lk_territory_entityimage: WebExpand<ImageDescriptor_Expand, Territory_Select, Territory_Filter, { lk_territory_entityimage: Territory_Result[] }>;
  lk_transactioncurrency_entityimage: WebExpand<ImageDescriptor_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { lk_transactioncurrency_entityimage: TransactionCurrency_Result[] }>;
  workflow_entityimage: WebExpand<ImageDescriptor_Expand, Workflow_Select, Workflow_Filter, { workflow_entityimage: Workflow_Result[] }>;
}
interface ImageDescriptor_FormattedResult {
}
interface ImageDescriptor_Result extends ImageDescriptor_Base, ImageDescriptor_Relationships {
  "@odata.etag": string;
}
interface ImageDescriptor_RelatedOne {
  FileId: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface ImageDescriptor_RelatedMany {
  ImageDescriptor_Template: WebMappingRetrieve<Template_Select,Template_Expand,Template_Filter,Template_Fixed,Template_Result,Template_FormattedResult>;
  ImageDescriptor_connector_IconBlob: WebMappingRetrieve<connector_Select,connector_Expand,connector_Filter,connector_Fixed,connector_Result,connector_FormattedResult>;
  ImageDescriptor_msdyn_3dmodel: WebMappingRetrieve<msdyn_3dmodel_Select,msdyn_3dmodel_Expand,msdyn_3dmodel_Filter,msdyn_3dmodel_Fixed,msdyn_3dmodel_Result,msdyn_3dmodel_FormattedResult>;
  ImageDescriptor_msdyn_AIBFile_msdyn_Image: WebMappingRetrieve<msdyn_AIBFile_Select,msdyn_AIBFile_Expand,msdyn_AIBFile_Filter,msdyn_AIBFile_Fixed,msdyn_AIBFile_Result,msdyn_AIBFile_FormattedResult>;
  ImageDescriptor_msdyn_AIOdImage: WebMappingRetrieve<msdyn_AIOdImage_Select,msdyn_AIOdImage_Expand,msdyn_AIOdImage_Filter,msdyn_AIOdImage_Fixed,msdyn_AIOdImage_Result,msdyn_AIOdImage_FormattedResult>;
  ImageDescriptor_msdyn_bookableresourcebookingquicknote_msdyn_image: WebMappingRetrieve<msdyn_bookableresourcebookingquicknote_Select,msdyn_bookableresourcebookingquicknote_Expand,msdyn_bookableresourcebookingquicknote_Filter,msdyn_bookableresourcebookingquicknote_Fixed,msdyn_bookableresourcebookingquicknote_Result,msdyn_bookableresourcebookingquicknote_FormattedResult>;
  ImageDescriptor_msdyn_customerassetattachment_msdyn_Image: WebMappingRetrieve<msdyn_customerassetattachment_Select,msdyn_customerassetattachment_Expand,msdyn_customerassetattachment_Filter,msdyn_customerassetattachment_Fixed,msdyn_customerassetattachment_Result,msdyn_customerassetattachment_FormattedResult>;
  ImageDescriptor_msdyn_kbattachment_msdyn_fileicon: WebMappingRetrieve<msdyn_kbattachment_Select,msdyn_kbattachment_Expand,msdyn_kbattachment_Filter,msdyn_kbattachment_Fixed,msdyn_kbattachment_Result,msdyn_kbattachment_FormattedResult>;
  ImageDescriptor_msdyn_richtextfile_msdyn_imageblob: WebMappingRetrieve<msdyn_richtextfile_Select,msdyn_richtextfile_Expand,msdyn_richtextfile_Filter,msdyn_richtextfile_Fixed,msdyn_richtextfile_Result,msdyn_richtextfile_FormattedResult>;
  imagedescriptor_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  lk_account_entityimage: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  lk_campaign_entityimage: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  lk_competitor_entityimage: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
  lk_connection_entityimage: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  lk_contact_entityimage: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  lk_contract_entityimage: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  lk_emailserverprofile_entityimage: WebMappingRetrieve<EmailServerProfile_Select,EmailServerProfile_Expand,EmailServerProfile_Filter,EmailServerProfile_Fixed,EmailServerProfile_Result,EmailServerProfile_FormattedResult>;
  lk_goal_entityimage: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  lk_incident_entityimage: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  lk_invoice_entityimage: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  lk_kbarticle_entityimage: WebMappingRetrieve<KbArticle_Select,KbArticle_Expand,KbArticle_Filter,KbArticle_Fixed,KbArticle_Result,KbArticle_FormattedResult>;
  lk_lead_entityimage: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  lk_mailbox_entityimage: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  lk_opportunityproduct_entityimage: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  lk_organization_entityimage: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  lk_product_entityimage: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  lk_publisher_entityimage: WebMappingRetrieve<Publisher_Select,Publisher_Expand,Publisher_Filter,Publisher_Fixed,Publisher_Result,Publisher_FormattedResult>;
  lk_queue_entityimage: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  lk_resource_entityimage: WebMappingRetrieve<Resource_Select,Resource_Expand,Resource_Filter,Resource_Fixed,Resource_Result,Resource_FormattedResult>;
  lk_salesliterature_entityimage: WebMappingRetrieve<SalesLiterature_Select,SalesLiterature_Expand,SalesLiterature_Filter,SalesLiterature_Fixed,SalesLiterature_Result,SalesLiterature_FormattedResult>;
  lk_salesorder_entityimage: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  lk_systemuser_entityimage: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_territory_entityimage: WebMappingRetrieve<Territory_Select,Territory_Expand,Territory_Filter,Territory_Fixed,Territory_Result,Territory_FormattedResult>;
  lk_transactioncurrency_entityimage: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  workflow_entityimage: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface WebEntitiesRetrieve {
  imagedescriptors: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
}
interface WebEntitiesRelated {
  imagedescriptors: WebMappingRelated<ImageDescriptor_RelatedOne,ImageDescriptor_RelatedMany>;
}
interface WebEntitiesCUDA {
  imagedescriptors: WebMappingCUDA<ImageDescriptor_Create,ImageDescriptor_Update,ImageDescriptor_Select>;
}
