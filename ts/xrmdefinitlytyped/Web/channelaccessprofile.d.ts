interface ChannelAccessProfile_Base extends WebEntity {
  channelaccessprofileid?: string | null;
  channelaccessprofileidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  emailaccess?: boolean | null;
  exchangerate?: number | null;
  facebookaccess?: boolean | null;
  haveprivilegeschanged?: boolean | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  isguestprofile?: boolean | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  phoneaccess?: boolean | null;
  rateknowledgearticles?: boolean | null;
  solutionid?: string | null;
  statecode?: channelaccessprofile_statecode | null;
  statuscode?: channelaccessprofile_statuscode | null;
  submitfeedback?: boolean | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  twitteraccess?: boolean | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  viewarticlerating?: boolean | null;
  viewknowledgearticles?: boolean | null;
  webaccess?: boolean | null;
}
interface ChannelAccessProfile_Relationships {
  ChannelAccessProfile_Privilege?: Privilege_Result[] | null;
  ChannelAccessProfile_SyncErrors?: SyncError_Result[] | null;
  business_unit_channelaccessprofile?: BusinessUnit_Result | null;
  channelaccessprofile_annotations?: Annotation_Result[] | null;
  channelaccessprofile_asyncoperations?: AsyncOperation_Result[] | null;
  channelaccessprofile_bulkdeletefailures?: BulkDeleteFailure_Result[] | null;
  channelaccessprofile_createdby?: SystemUser_Result | null;
  channelaccessprofile_createdonbehalfby?: SystemUser_Result | null;
  channelaccessprofile_duplicatebaserecord?: DuplicateRecord_Result[] | null;
  channelaccessprofile_duplicatematchingrecord?: DuplicateRecord_Result[] | null;
  channelaccessprofile_modifiedby?: SystemUser_Result | null;
  channelaccessprofile_modifiedonbehalfby?: SystemUser_Result | null;
  channelaccessprofile_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  channelaccessprofile_processsession?: ProcessSession_Result[] | null;
  channelaccessprofile_userentityinstancedatas?: UserEntityInstanceData_Result[] | null;
  externalpartyitem_associated_channelaccessprofile?: ExternalPartyItem_Result[] | null;
  owner_channelaccessprofile?: Team_Result | null;
  owner_channelaccessprofile1?: SystemUser_Result | null;
  profileruleitem_associated_channelaccessprofile?: ChannelAccessProfileRuleItem_Result[] | null;
  team_channelaccessprofile?: Team_Result | null;
  transactioncurrency_channelaccessprofile?: TransactionCurrency_Result | null;
  user_channelaccessprofile?: SystemUser_Result | null;
}
interface ChannelAccessProfile extends ChannelAccessProfile_Base, ChannelAccessProfile_Relationships {
  owner_channelaccessprofile_bind$systemusers?: string | null;
  owner_channelaccessprofile_bind$teams?: string | null;
  transactioncurrency_channelaccessprofile_bind$transactioncurrencies?: string | null;
}
interface ChannelAccessProfile_Create extends ChannelAccessProfile {
}
interface ChannelAccessProfile_Update extends ChannelAccessProfile {
}
interface ChannelAccessProfile_Select {
  channelaccessprofileid: WebAttribute<ChannelAccessProfile_Select, { channelaccessprofileid: string | null }, {  }>;
  channelaccessprofileidunique: WebAttribute<ChannelAccessProfile_Select, { channelaccessprofileidunique: string | null }, {  }>;
  componentstate: WebAttribute<ChannelAccessProfile_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ChannelAccessProfile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ChannelAccessProfile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ChannelAccessProfile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  emailaccess: WebAttribute<ChannelAccessProfile_Select, { emailaccess: boolean | null }, {  }>;
  exchangerate: WebAttribute<ChannelAccessProfile_Select, { exchangerate: number | null }, {  }>;
  facebookaccess: WebAttribute<ChannelAccessProfile_Select, { facebookaccess: boolean | null }, {  }>;
  haveprivilegeschanged: WebAttribute<ChannelAccessProfile_Select, { haveprivilegeschanged: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<ChannelAccessProfile_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<ChannelAccessProfile_Select, { introducedversion: string | null }, {  }>;
  isguestprofile: WebAttribute<ChannelAccessProfile_Select, { isguestprofile: boolean | null }, {  }>;
  ismanaged: WebAttribute<ChannelAccessProfile_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ChannelAccessProfile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ChannelAccessProfile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ChannelAccessProfile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ChannelAccessProfile_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ChannelAccessProfile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<ChannelAccessProfile_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ChannelAccessProfile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ChannelAccessProfile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ChannelAccessProfile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ChannelAccessProfile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  phoneaccess: WebAttribute<ChannelAccessProfile_Select, { phoneaccess: boolean | null }, {  }>;
  rateknowledgearticles: WebAttribute<ChannelAccessProfile_Select, { rateknowledgearticles: boolean | null }, {  }>;
  solutionid: WebAttribute<ChannelAccessProfile_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<ChannelAccessProfile_Select, { statecode: channelaccessprofile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ChannelAccessProfile_Select, { statuscode: channelaccessprofile_statuscode | null }, { statuscode_formatted?: string }>;
  submitfeedback: WebAttribute<ChannelAccessProfile_Select, { submitfeedback: boolean | null }, {  }>;
  supportingsolutionid: WebAttribute<ChannelAccessProfile_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ChannelAccessProfile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ChannelAccessProfile_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  twitteraccess: WebAttribute<ChannelAccessProfile_Select, { twitteraccess: boolean | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ChannelAccessProfile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ChannelAccessProfile_Select, { versionnumber: number | null }, {  }>;
  viewarticlerating: WebAttribute<ChannelAccessProfile_Select, { viewarticlerating: boolean | null }, {  }>;
  viewknowledgearticles: WebAttribute<ChannelAccessProfile_Select, { viewknowledgearticles: boolean | null }, {  }>;
  webaccess: WebAttribute<ChannelAccessProfile_Select, { webaccess: boolean | null }, {  }>;
}
interface ChannelAccessProfile_Filter {
  channelaccessprofileid: XQW.Guid;
  channelaccessprofileidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  emailaccess: boolean;
  exchangerate: any;
  facebookaccess: boolean;
  haveprivilegeschanged: boolean;
  importsequencenumber: number;
  introducedversion: string;
  isguestprofile: boolean;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  phoneaccess: boolean;
  rateknowledgearticles: boolean;
  solutionid: XQW.Guid;
  statecode: channelaccessprofile_statecode;
  statuscode: channelaccessprofile_statuscode;
  submitfeedback: boolean;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  twitteraccess: boolean;
  utcconversiontimezonecode: number;
  versionnumber: number;
  viewarticlerating: boolean;
  viewknowledgearticles: boolean;
  webaccess: boolean;
}
interface ChannelAccessProfile_Expand {
  ChannelAccessProfile_Privilege: WebExpand<ChannelAccessProfile_Expand, Privilege_Select, Privilege_Filter, { ChannelAccessProfile_Privilege: Privilege_Result[] }>;
  ChannelAccessProfile_SyncErrors: WebExpand<ChannelAccessProfile_Expand, SyncError_Select, SyncError_Filter, { ChannelAccessProfile_SyncErrors: SyncError_Result[] }>;
  business_unit_channelaccessprofile: WebExpand<ChannelAccessProfile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { business_unit_channelaccessprofile: BusinessUnit_Result }>;
  channelaccessprofile_annotations: WebExpand<ChannelAccessProfile_Expand, Annotation_Select, Annotation_Filter, { channelaccessprofile_annotations: Annotation_Result[] }>;
  channelaccessprofile_asyncoperations: WebExpand<ChannelAccessProfile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { channelaccessprofile_asyncoperations: AsyncOperation_Result[] }>;
  channelaccessprofile_bulkdeletefailures: WebExpand<ChannelAccessProfile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { channelaccessprofile_bulkdeletefailures: BulkDeleteFailure_Result[] }>;
  channelaccessprofile_createdby: WebExpand<ChannelAccessProfile_Expand, SystemUser_Select, SystemUser_Filter, { channelaccessprofile_createdby: SystemUser_Result }>;
  channelaccessprofile_createdonbehalfby: WebExpand<ChannelAccessProfile_Expand, SystemUser_Select, SystemUser_Filter, { channelaccessprofile_createdonbehalfby: SystemUser_Result }>;
  channelaccessprofile_duplicatebaserecord: WebExpand<ChannelAccessProfile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { channelaccessprofile_duplicatebaserecord: DuplicateRecord_Result[] }>;
  channelaccessprofile_duplicatematchingrecord: WebExpand<ChannelAccessProfile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { channelaccessprofile_duplicatematchingrecord: DuplicateRecord_Result[] }>;
  channelaccessprofile_modifiedby: WebExpand<ChannelAccessProfile_Expand, SystemUser_Select, SystemUser_Filter, { channelaccessprofile_modifiedby: SystemUser_Result }>;
  channelaccessprofile_modifiedonbehalfby: WebExpand<ChannelAccessProfile_Expand, SystemUser_Select, SystemUser_Filter, { channelaccessprofile_modifiedonbehalfby: SystemUser_Result }>;
  channelaccessprofile_principalobjectattributeaccess: WebExpand<ChannelAccessProfile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { channelaccessprofile_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  channelaccessprofile_processsession: WebExpand<ChannelAccessProfile_Expand, ProcessSession_Select, ProcessSession_Filter, { channelaccessprofile_processsession: ProcessSession_Result[] }>;
  channelaccessprofile_userentityinstancedatas: WebExpand<ChannelAccessProfile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { channelaccessprofile_userentityinstancedatas: UserEntityInstanceData_Result[] }>;
  externalpartyitem_associated_channelaccessprofile: WebExpand<ChannelAccessProfile_Expand, ExternalPartyItem_Select, ExternalPartyItem_Filter, { externalpartyitem_associated_channelaccessprofile: ExternalPartyItem_Result[] }>;
  owner_channelaccessprofile: WebExpand<ChannelAccessProfile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { owner_channelaccessprofile: SystemUser_Result } & { owner_channelaccessprofile: Team_Result }>;
  profileruleitem_associated_channelaccessprofile: WebExpand<ChannelAccessProfile_Expand, ChannelAccessProfileRuleItem_Select, ChannelAccessProfileRuleItem_Filter, { profileruleitem_associated_channelaccessprofile: ChannelAccessProfileRuleItem_Result[] }>;
  team_channelaccessprofile: WebExpand<ChannelAccessProfile_Expand, Team_Select, Team_Filter, { team_channelaccessprofile: Team_Result }>;
  transactioncurrency_channelaccessprofile: WebExpand<ChannelAccessProfile_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrency_channelaccessprofile: TransactionCurrency_Result }>;
  user_channelaccessprofile: WebExpand<ChannelAccessProfile_Expand, SystemUser_Select, SystemUser_Filter, { user_channelaccessprofile: SystemUser_Result }>;
}
interface ChannelAccessProfile_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface ChannelAccessProfile_Result extends ChannelAccessProfile_Base, ChannelAccessProfile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ChannelAccessProfile_RelatedOne {
  business_unit_channelaccessprofile: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  channelaccessprofile_createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  channelaccessprofile_createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  channelaccessprofile_modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  channelaccessprofile_modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owner_channelaccessprofile: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owner_channelaccessprofile1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  team_channelaccessprofile: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  transactioncurrency_channelaccessprofile: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  user_channelaccessprofile: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ChannelAccessProfile_RelatedMany {
  ChannelAccessProfile_Privilege: WebMappingRetrieve<Privilege_Select,Privilege_Expand,Privilege_Filter,Privilege_Fixed,Privilege_Result,Privilege_FormattedResult>;
  ChannelAccessProfile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  channelaccessprofile_annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  channelaccessprofile_asyncoperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  channelaccessprofile_bulkdeletefailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  channelaccessprofile_duplicatebaserecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  channelaccessprofile_duplicatematchingrecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  channelaccessprofile_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  channelaccessprofile_processsession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  channelaccessprofile_userentityinstancedatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  externalpartyitem_associated_channelaccessprofile: WebMappingRetrieve<ExternalPartyItem_Select,ExternalPartyItem_Expand,ExternalPartyItem_Filter,ExternalPartyItem_Fixed,ExternalPartyItem_Result,ExternalPartyItem_FormattedResult>;
  profileruleitem_associated_channelaccessprofile: WebMappingRetrieve<ChannelAccessProfileRuleItem_Select,ChannelAccessProfileRuleItem_Expand,ChannelAccessProfileRuleItem_Filter,ChannelAccessProfileRuleItem_Fixed,ChannelAccessProfileRuleItem_Result,ChannelAccessProfileRuleItem_FormattedResult>;
}
interface WebEntitiesRetrieve {
  channelaccessprofiles: WebMappingRetrieve<ChannelAccessProfile_Select,ChannelAccessProfile_Expand,ChannelAccessProfile_Filter,ChannelAccessProfile_Fixed,ChannelAccessProfile_Result,ChannelAccessProfile_FormattedResult>;
}
interface WebEntitiesRelated {
  channelaccessprofiles: WebMappingRelated<ChannelAccessProfile_RelatedOne,ChannelAccessProfile_RelatedMany>;
}
interface WebEntitiesCUDA {
  channelaccessprofiles: WebMappingCUDA<ChannelAccessProfile_Create,ChannelAccessProfile_Update,ChannelAccessProfile_Select>;
}
