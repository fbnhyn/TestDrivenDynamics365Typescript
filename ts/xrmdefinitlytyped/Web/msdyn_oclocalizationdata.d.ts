interface msdyn_oclocalizationdata_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_defaultlocalizedtext?: string | null;
  msdyn_entitycolumnname?: string | null;
  msdyn_entityname?: string | null;
  msdyn_entityrecordid?: string | null;
  msdyn_isdefault?: boolean | null;
  msdyn_languagecode?: number | null;
  msdyn_localizedtext?: string | null;
  msdyn_oclocalizationdataid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_oclocalizationdata_statecode | null;
  statuscode?: msdyn_oclocalizationdata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_oclocalizationdata_Relationships {
  msdyn_oclocalizationdata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_oclocalizationdata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_oclocalizationdata_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_oclocalizationdata_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_oclocalizationdata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_oclocalizationdata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_oclocalizationdata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_oclocalizationdata_SyncErrors?: SyncError_Result[] | null;
  msdyn_oclocalizationdata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_oclocalizationdata extends msdyn_oclocalizationdata_Base, msdyn_oclocalizationdata_Relationships {
  msdyn_customerlanguageid_bind$msdyn_oclanguages?: string | null;
  msdyn_systemmessageid_bind$msdyn_ocsystemmessages?: string | null;
}
interface msdyn_oclocalizationdata_Create extends msdyn_oclocalizationdata {
}
interface msdyn_oclocalizationdata_Update extends msdyn_oclocalizationdata {
}
interface msdyn_oclocalizationdata_Select {
  createdby_guid: WebAttribute<msdyn_oclocalizationdata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_oclocalizationdata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_oclocalizationdata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_oclocalizationdata_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_oclocalizationdata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_oclocalizationdata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_oclocalizationdata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customerlanguageid_guid: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_customerlanguageid_guid: string | null }, { msdyn_customerlanguageid_formatted?: string }>;
  msdyn_defaultlocalizedtext: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_defaultlocalizedtext: string | null }, {  }>;
  msdyn_entitycolumnname: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_entitycolumnname: string | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_entityrecordid: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_entityrecordid: string | null }, {  }>;
  msdyn_isdefault: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_isdefault: boolean | null }, {  }>;
  msdyn_languagecode: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_languagecode: number | null }, {  }>;
  msdyn_localizedtext: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_localizedtext: string | null }, {  }>;
  msdyn_oclocalizationdataid: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_oclocalizationdataid: string | null }, {  }>;
  msdyn_systemmessageid_guid: WebAttribute<msdyn_oclocalizationdata_Select, { msdyn_systemmessageid_guid: string | null }, { msdyn_systemmessageid_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_oclocalizationdata_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_oclocalizationdata_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_oclocalizationdata_Select, { statecode: msdyn_oclocalizationdata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_oclocalizationdata_Select, { statuscode: msdyn_oclocalizationdata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_oclocalizationdata_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_oclocalizationdata_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_oclocalizationdata_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_oclocalizationdata_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customerlanguageid_guid: XQW.Guid;
  msdyn_defaultlocalizedtext: string;
  msdyn_entitycolumnname: string;
  msdyn_entityname: string;
  msdyn_entityrecordid: string;
  msdyn_isdefault: boolean;
  msdyn_languagecode: number;
  msdyn_localizedtext: string;
  msdyn_oclocalizationdataid: XQW.Guid;
  msdyn_systemmessageid_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_oclocalizationdata_statecode;
  statuscode: msdyn_oclocalizationdata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_oclocalizationdata_Expand {
  createdby: WebExpand<msdyn_oclocalizationdata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_oclocalizationdata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_oclocalizationdata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_oclocalizationdata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_customerlanguageid: WebExpand<msdyn_oclocalizationdata_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_customerlanguageid: msdyn_oclanguage_Result }>;
  msdyn_oclocalizationdata_AsyncOperations: WebExpand<msdyn_oclocalizationdata_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_oclocalizationdata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_oclocalizationdata_BulkDeleteFailures: WebExpand<msdyn_oclocalizationdata_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_oclocalizationdata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_oclocalizationdata_DuplicateBaseRecord: WebExpand<msdyn_oclocalizationdata_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_oclocalizationdata_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_oclocalizationdata_DuplicateMatchingRecord: WebExpand<msdyn_oclocalizationdata_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_oclocalizationdata_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_oclocalizationdata_MailboxTrackingFolders: WebExpand<msdyn_oclocalizationdata_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_oclocalizationdata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_oclocalizationdata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_oclocalizationdata_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_oclocalizationdata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_oclocalizationdata_ProcessSession: WebExpand<msdyn_oclocalizationdata_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_oclocalizationdata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_oclocalizationdata_SyncErrors: WebExpand<msdyn_oclocalizationdata_Expand, SyncError_Select, SyncError_Filter, { msdyn_oclocalizationdata_SyncErrors: SyncError_Result[] }>;
  msdyn_oclocalizationdata_UserEntityInstanceDatas: WebExpand<msdyn_oclocalizationdata_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_oclocalizationdata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_systemmessageid: WebExpand<msdyn_oclocalizationdata_Expand, msdyn_ocsystemmessage_Select, msdyn_ocsystemmessage_Filter, { msdyn_systemmessageid: msdyn_ocsystemmessage_Result }>;
  organizationid: WebExpand<msdyn_oclocalizationdata_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_oclocalizationdata_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_customerlanguageid_formatted?: string;
  msdyn_systemmessageid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_oclocalizationdata_Result extends msdyn_oclocalizationdata_Base, msdyn_oclocalizationdata_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_customerlanguageid_guid: string | null;
  msdyn_systemmessageid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_oclocalizationdata_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_customerlanguageid: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
  msdyn_systemmessageid: WebMappingRetrieve<msdyn_ocsystemmessage_Select,msdyn_ocsystemmessage_Expand,msdyn_ocsystemmessage_Filter,msdyn_ocsystemmessage_Fixed,msdyn_ocsystemmessage_Result,msdyn_ocsystemmessage_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_oclocalizationdata_RelatedMany {
  msdyn_oclocalizationdata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_oclocalizationdata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_oclocalizationdata_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_oclocalizationdata_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_oclocalizationdata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_oclocalizationdata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_oclocalizationdata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_oclocalizationdata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_oclocalizationdata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_oclocalizationdatas: WebMappingRetrieve<msdyn_oclocalizationdata_Select,msdyn_oclocalizationdata_Expand,msdyn_oclocalizationdata_Filter,msdyn_oclocalizationdata_Fixed,msdyn_oclocalizationdata_Result,msdyn_oclocalizationdata_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_oclocalizationdatas: WebMappingRelated<msdyn_oclocalizationdata_RelatedOne,msdyn_oclocalizationdata_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_oclocalizationdatas: WebMappingCUDA<msdyn_oclocalizationdata_Create,msdyn_oclocalizationdata_Update,msdyn_oclocalizationdata_Select>;
}
