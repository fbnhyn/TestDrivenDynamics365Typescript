interface msdyn_ocliveworkitemcharacteristic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_characteristicsource?: msdyn_conversationcharacteristicsource | null;
  msdyn_confidence?: number | null;
  msdyn_createdon?: Date | null;
  msdyn_modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocliveworkitemcharacteristicid?: string | null;
  msdyn_status?: msdyn_conversationcharacteristicstatus | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocliveworkitemcharacteristic_statecode | null;
  statuscode?: msdyn_ocliveworkitemcharacteristic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocliveworkitemcharacteristic_Relationships {
  msdyn_msdyn_ocliveworkitemcharacteristic_msdyn_ocsessioncharacteristic_ocliveworkitemcharacteristic?: msdyn_ocsessioncharacteristic_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocliveworkitemcharacteristic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocliveworkitemcharacteristic extends msdyn_ocliveworkitemcharacteristic_Base, msdyn_ocliveworkitemcharacteristic_Relationships {
  msdyn_characteristic_bind$characteristics?: string | null;
  msdyn_mlmodelid_bind$msdyn_aimodels?: string | null;
  msdyn_ocliveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_ratingvalue_bind$ratingvalues?: string | null;
  msdyn_skilladdedby_bind$systemusers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocliveworkitemcharacteristic_Create extends msdyn_ocliveworkitemcharacteristic {
}
interface msdyn_ocliveworkitemcharacteristic_Update extends msdyn_ocliveworkitemcharacteristic {
}
interface msdyn_ocliveworkitemcharacteristic_Select {
  createdby_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_characteristic_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_characteristic_guid: string | null }, { msdyn_characteristic_formatted?: string }>;
  msdyn_characteristicsource: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_characteristicsource: msdyn_conversationcharacteristicsource | null }, { msdyn_characteristicsource_formatted?: string }>;
  msdyn_confidence: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_confidence: number | null }, {  }>;
  msdyn_createdon: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_createdon: Date | null }, { msdyn_createdon_formatted?: string }>;
  msdyn_mlmodelid_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_mlmodelid_guid: string | null }, { msdyn_mlmodelid_formatted?: string }>;
  msdyn_modifiedon: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_modifiedon: Date | null }, { msdyn_modifiedon_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocliveworkitemcharacteristicid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_ocliveworkitemcharacteristicid: string | null }, {  }>;
  msdyn_ocliveworkitemid_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_ocliveworkitemid_guid: string | null }, { msdyn_ocliveworkitemid_formatted?: string }>;
  msdyn_ratingvalue_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_ratingvalue_guid: string | null }, { msdyn_ratingvalue_formatted?: string }>;
  msdyn_skilladdedby_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_skilladdedby_guid: string | null }, { msdyn_skilladdedby_formatted?: string }>;
  msdyn_status: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { msdyn_status: msdyn_conversationcharacteristicstatus | null }, { msdyn_status_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { statecode: msdyn_ocliveworkitemcharacteristic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { statuscode: msdyn_ocliveworkitemcharacteristic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocliveworkitemcharacteristic_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocliveworkitemcharacteristic_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_characteristic_guid: XQW.Guid;
  msdyn_characteristicsource: msdyn_conversationcharacteristicsource;
  msdyn_confidence: number;
  msdyn_createdon: Date;
  msdyn_mlmodelid_guid: XQW.Guid;
  msdyn_modifiedon: Date;
  msdyn_name: string;
  msdyn_ocliveworkitemcharacteristicid: XQW.Guid;
  msdyn_ocliveworkitemid_guid: XQW.Guid;
  msdyn_ratingvalue_guid: XQW.Guid;
  msdyn_skilladdedby_guid: XQW.Guid;
  msdyn_status: msdyn_conversationcharacteristicstatus;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocliveworkitemcharacteristic_statecode;
  statuscode: msdyn_ocliveworkitemcharacteristic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocliveworkitemcharacteristic_Expand {
  createdby: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_characteristic: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, Characteristic_Select, Characteristic_Filter, { msdyn_characteristic: Characteristic_Result }>;
  msdyn_mlmodelid: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_mlmodelid: msdyn_AIModel_Result }>;
  msdyn_msdyn_ocliveworkitemcharacteristic_msdyn_ocsessioncharacteristic_ocliveworkitemcharacteristic: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, msdyn_ocsessioncharacteristic_Select, msdyn_ocsessioncharacteristic_Filter, { msdyn_msdyn_ocliveworkitemcharacteristic_msdyn_ocsessioncharacteristic_ocliveworkitemcharacteristic: msdyn_ocsessioncharacteristic_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_AsyncOperations: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocliveworkitemcharacteristic_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_BulkDeleteFailures: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocliveworkitemcharacteristic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_DuplicateBaseRecord: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocliveworkitemcharacteristic_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_DuplicateMatchingRecord: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocliveworkitemcharacteristic_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_MailboxTrackingFolders: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocliveworkitemcharacteristic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocliveworkitemcharacteristic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_ProcessSession: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocliveworkitemcharacteristic_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_SyncErrors: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocliveworkitemcharacteristic_SyncErrors: SyncError_Result[] }>;
  msdyn_ocliveworkitemcharacteristic_UserEntityInstanceDatas: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocliveworkitemcharacteristic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocliveworkitemid: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ocliveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_ratingvalue: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, RatingValue_Select, RatingValue_Filter, { msdyn_ratingvalue: RatingValue_Result }>;
  msdyn_skilladdedby: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_skilladdedby: SystemUser_Result }>;
  ownerid: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocliveworkitemcharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocliveworkitemcharacteristic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_characteristic_formatted?: string;
  msdyn_characteristicsource_formatted?: string;
  msdyn_createdon_formatted?: string;
  msdyn_mlmodelid_formatted?: string;
  msdyn_modifiedon_formatted?: string;
  msdyn_ocliveworkitemid_formatted?: string;
  msdyn_ratingvalue_formatted?: string;
  msdyn_skilladdedby_formatted?: string;
  msdyn_status_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocliveworkitemcharacteristic_Result extends msdyn_ocliveworkitemcharacteristic_Base, msdyn_ocliveworkitemcharacteristic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_characteristic_guid: string | null;
  msdyn_mlmodelid_guid: string | null;
  msdyn_ocliveworkitemid_guid: string | null;
  msdyn_ratingvalue_guid: string | null;
  msdyn_skilladdedby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocliveworkitemcharacteristic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_characteristic: WebMappingRetrieve<Characteristic_Select,Characteristic_Expand,Characteristic_Filter,Characteristic_Fixed,Characteristic_Result,Characteristic_FormattedResult>;
  msdyn_mlmodelid: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  msdyn_ocliveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_ratingvalue: WebMappingRetrieve<RatingValue_Select,RatingValue_Expand,RatingValue_Filter,RatingValue_Fixed,RatingValue_Result,RatingValue_FormattedResult>;
  msdyn_skilladdedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocliveworkitemcharacteristic_RelatedMany {
  msdyn_msdyn_ocliveworkitemcharacteristic_msdyn_ocsessioncharacteristic_ocliveworkitemcharacteristic: WebMappingRetrieve<msdyn_ocsessioncharacteristic_Select,msdyn_ocsessioncharacteristic_Expand,msdyn_ocsessioncharacteristic_Filter,msdyn_ocsessioncharacteristic_Fixed,msdyn_ocsessioncharacteristic_Result,msdyn_ocsessioncharacteristic_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocliveworkitemcharacteristics: WebMappingRetrieve<msdyn_ocliveworkitemcharacteristic_Select,msdyn_ocliveworkitemcharacteristic_Expand,msdyn_ocliveworkitemcharacteristic_Filter,msdyn_ocliveworkitemcharacteristic_Fixed,msdyn_ocliveworkitemcharacteristic_Result,msdyn_ocliveworkitemcharacteristic_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocliveworkitemcharacteristics: WebMappingRelated<msdyn_ocliveworkitemcharacteristic_RelatedOne,msdyn_ocliveworkitemcharacteristic_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocliveworkitemcharacteristics: WebMappingCUDA<msdyn_ocliveworkitemcharacteristic_Create,msdyn_ocliveworkitemcharacteristic_Update,msdyn_ocliveworkitemcharacteristic_Select>;
}
