interface SalesLiterature_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  entityimageid?: string | null;
  exchangerate?: number | null;
  expirationdate?: Date | null;
  hasattachments?: boolean | null;
  importsequencenumber?: number | null;
  iscustomerviewable?: boolean | null;
  keywords?: string | null;
  literaturetypecode?: salesliterature_literaturetypecode | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  salesliteratureid?: string | null;
  stageid?: string | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface SalesLiterature_Relationships {
  SalesLiterature_AsyncOperations?: AsyncOperation_Result[] | null;
  SalesLiterature_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  SalesLiterature_ProcessSessions?: ProcessSession_Result[] | null;
  SalesLiterature_SharepointDocument?: SharePointDocument_Result[] | null;
  SalesLiterature_SharepointDocumentLocation?: SharePointDocumentLocation_Result[] | null;
  SalesLiterature_SyncErrors?: SyncError_Result[] | null;
  campaignactivitysalesliterature_association?: CampaignActivity_Result[] | null;
  campaignsalesliterature_association?: Campaign_Result[] | null;
  competitorsalesliterature_association?: Competitor_Result[] | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  productsalesliterature_association?: Product_Result[] | null;
  sales_literature_items?: SalesLiteratureItem_Result[] | null;
  salesliterature_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  salesliterature_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  stageid_processstage?: ProcessStage_Result | null;
  userentityinstancedata_salesliterature?: UserEntityInstanceData_Result[] | null;
}
interface SalesLiterature extends SalesLiterature_Base, SalesLiterature_Relationships {
  employeecontactid_bind$systemusers?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  subjectid_bind$subjects?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface SalesLiterature_Create extends SalesLiterature {
}
interface SalesLiterature_Update extends SalesLiterature {
}
interface SalesLiterature_Select {
  createdby_guid: WebAttribute<SalesLiterature_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SalesLiterature_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SalesLiterature_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SalesLiterature_Select, { description: string | null }, {  }>;
  employeecontactid_guid: WebAttribute<SalesLiterature_Select, { employeecontactid_guid: string | null }, { employeecontactid_formatted?: string }>;
  entityimageid: WebAttribute<SalesLiterature_Select, { entityimageid: string | null }, {  }>;
  exchangerate: WebAttribute<SalesLiterature_Select, { exchangerate: number | null }, {  }>;
  expirationdate: WebAttribute<SalesLiterature_Select, { expirationdate: Date | null }, { expirationdate_formatted?: string }>;
  hasattachments: WebAttribute<SalesLiterature_Select, { hasattachments: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<SalesLiterature_Select, { importsequencenumber: number | null }, {  }>;
  iscustomerviewable: WebAttribute<SalesLiterature_Select, { iscustomerviewable: boolean | null }, {  }>;
  keywords: WebAttribute<SalesLiterature_Select, { keywords: string | null }, {  }>;
  literaturetypecode: WebAttribute<SalesLiterature_Select, { literaturetypecode: salesliterature_literaturetypecode | null }, { literaturetypecode_formatted?: string }>;
  modifiedby_guid: WebAttribute<SalesLiterature_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SalesLiterature_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SalesLiterature_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SalesLiterature_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SalesLiterature_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<SalesLiterature_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid: WebAttribute<SalesLiterature_Select, { processid: string | null }, {  }>;
  salesliteratureid: WebAttribute<SalesLiterature_Select, { salesliteratureid: string | null }, {  }>;
  stageid: WebAttribute<SalesLiterature_Select, { stageid: string | null }, {  }>;
  subjectid_guid: WebAttribute<SalesLiterature_Select, { subjectid_guid: string | null }, { subjectid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<SalesLiterature_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SalesLiterature_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<SalesLiterature_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SalesLiterature_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<SalesLiterature_Select, { versionnumber: number | null }, {  }>;
}
interface SalesLiterature_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  employeecontactid_guid: XQW.Guid;
  entityimageid: XQW.Guid;
  exchangerate: any;
  expirationdate: Date;
  hasattachments: boolean;
  importsequencenumber: number;
  iscustomerviewable: boolean;
  keywords: string;
  literaturetypecode: salesliterature_literaturetypecode;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid: XQW.Guid;
  salesliteratureid: XQW.Guid;
  stageid: XQW.Guid;
  subjectid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface SalesLiterature_Expand {
  SalesLiterature_AsyncOperations: WebExpand<SalesLiterature_Expand, AsyncOperation_Select, AsyncOperation_Filter, { SalesLiterature_AsyncOperations: AsyncOperation_Result[] }>;
  SalesLiterature_BulkDeleteFailures: WebExpand<SalesLiterature_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { SalesLiterature_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  SalesLiterature_ProcessSessions: WebExpand<SalesLiterature_Expand, ProcessSession_Select, ProcessSession_Filter, { SalesLiterature_ProcessSessions: ProcessSession_Result[] }>;
  SalesLiterature_SharepointDocument: WebExpand<SalesLiterature_Expand, SharePointDocument_Select, SharePointDocument_Filter, { SalesLiterature_SharepointDocument: SharePointDocument_Result[] }>;
  SalesLiterature_SharepointDocumentLocation: WebExpand<SalesLiterature_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { SalesLiterature_SharepointDocumentLocation: SharePointDocumentLocation_Result[] }>;
  SalesLiterature_SyncErrors: WebExpand<SalesLiterature_Expand, SyncError_Select, SyncError_Filter, { SalesLiterature_SyncErrors: SyncError_Result[] }>;
  campaignactivitysalesliterature_association: WebExpand<SalesLiterature_Expand, CampaignActivity_Select, CampaignActivity_Filter, { campaignactivitysalesliterature_association: CampaignActivity_Result[] }>;
  campaignsalesliterature_association: WebExpand<SalesLiterature_Expand, Campaign_Select, Campaign_Filter, { campaignsalesliterature_association: Campaign_Result[] }>;
  competitorsalesliterature_association: WebExpand<SalesLiterature_Expand, Competitor_Select, Competitor_Filter, { competitorsalesliterature_association: Competitor_Result[] }>;
  createdby: WebExpand<SalesLiterature_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SalesLiterature_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  employeecontactid: WebExpand<SalesLiterature_Expand, SystemUser_Select, SystemUser_Filter, { employeecontactid: SystemUser_Result }>;
  entityimageid_imagedescriptor: WebExpand<SalesLiterature_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  modifiedby: WebExpand<SalesLiterature_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SalesLiterature_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SalesLiterature_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  productsalesliterature_association: WebExpand<SalesLiterature_Expand, Product_Select, Product_Filter, { productsalesliterature_association: Product_Result[] }>;
  sales_literature_items: WebExpand<SalesLiterature_Expand, SalesLiteratureItem_Select, SalesLiteratureItem_Filter, { sales_literature_items: SalesLiteratureItem_Result[] }>;
  salesliterature_MailboxTrackingFolders: WebExpand<SalesLiterature_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { salesliterature_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  salesliterature_principalobjectattributeaccess: WebExpand<SalesLiterature_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { salesliterature_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  stageid_processstage: WebExpand<SalesLiterature_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid_processstage: ProcessStage_Result }>;
  subjectid: WebExpand<SalesLiterature_Expand, Subject_Select, Subject_Filter, { subjectid: Subject_Result }>;
  transactioncurrencyid: WebExpand<SalesLiterature_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_salesliterature: WebExpand<SalesLiterature_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_salesliterature: UserEntityInstanceData_Result[] }>;
}
interface SalesLiterature_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  employeecontactid_formatted?: string;
  expirationdate_formatted?: string;
  literaturetypecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  subjectid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface SalesLiterature_Result extends SalesLiterature_Base, SalesLiterature_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  employeecontactid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  subjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SalesLiterature_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  employeecontactid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  stageid_processstage: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  subjectid: WebMappingRetrieve<Subject_Select,Subject_Expand,Subject_Filter,Subject_Fixed,Subject_Result,Subject_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface SalesLiterature_RelatedMany {
  SalesLiterature_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  SalesLiterature_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  SalesLiterature_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  SalesLiterature_SharepointDocument: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  SalesLiterature_SharepointDocumentLocation: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  SalesLiterature_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  campaignactivitysalesliterature_association: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  campaignsalesliterature_association: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  competitorsalesliterature_association: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
  productsalesliterature_association: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  sales_literature_items: WebMappingRetrieve<SalesLiteratureItem_Select,SalesLiteratureItem_Expand,SalesLiteratureItem_Filter,SalesLiteratureItem_Fixed,SalesLiteratureItem_Result,SalesLiteratureItem_FormattedResult>;
  salesliterature_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  salesliterature_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_salesliterature: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  salesliteratures: WebMappingRetrieve<SalesLiterature_Select,SalesLiterature_Expand,SalesLiterature_Filter,SalesLiterature_Fixed,SalesLiterature_Result,SalesLiterature_FormattedResult>;
}
interface WebEntitiesRelated {
  salesliteratures: WebMappingRelated<SalesLiterature_RelatedOne,SalesLiterature_RelatedMany>;
}
interface WebEntitiesCUDA {
  salesliteratures: WebMappingCUDA<SalesLiterature_Create,SalesLiterature_Update,SalesLiterature_Select>;
}
