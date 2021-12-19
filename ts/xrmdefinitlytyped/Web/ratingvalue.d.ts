interface RatingValue_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_isdefault?: boolean | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  ratingvalueid?: string | null;
  statecode?: ratingvalue_statecode | null;
  statuscode?: ratingvalue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  value?: number | null;
  versionnumber?: number | null;
}
interface RatingValue_Relationships {
  RatingModel?: RatingModel_Result | null;
  RatingValue_SyncErrors?: SyncError_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue?: msdyn_characteristicreqforteammember_Result[] | null;
  msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue?: msdyn_incidenttypecharacteristic_Result[] | null;
  msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue?: msdyn_ocliveworkitemcharacteristic_Result[] | null;
  msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue?: msdyn_requirementcharacteristic_Result[] | null;
  msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue?: msdyn_rolecompetencyrequirement_Result[] | null;
  msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: msdyn_rulesetdependencymapping_Result[] | null;
  msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue?: msdyn_workordercharacteristic_Result[] | null;
  msdyn_ratingvalue_skillattachmenttarget?: msdyn_skillattachmenttarget_Result[] | null;
  ratingvalue_AsyncOperations?: AsyncOperation_Result[] | null;
  ratingvalue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ratingvalue_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  ratingvalue_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  ratingvalue_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  ratingvalue_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  ratingvalue_ProcessSession?: ProcessSession_Result[] | null;
  ratingvalue_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  ratingvalue_bookableresourcecharacteristic_RatingValue?: BookableResourceCharacteristic_Result[] | null;
}
interface RatingValue extends RatingValue_Base, RatingValue_Relationships {
  RatingModel_bind$ratingmodels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface RatingValue_Create extends RatingValue {
}
interface RatingValue_Update extends RatingValue {
}
interface RatingValue_Select {
  createdby_guid: WebAttribute<RatingValue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RatingValue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RatingValue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<RatingValue_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<RatingValue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<RatingValue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RatingValue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RatingValue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_isdefault: WebAttribute<RatingValue_Select, { msdyn_isdefault: boolean | null }, {  }>;
  name: WebAttribute<RatingValue_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<RatingValue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<RatingValue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<RatingValue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<RatingValue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<RatingValue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  ratingmodel_guid: WebAttribute<RatingValue_Select, { ratingmodel_guid: string | null }, { ratingmodel_formatted?: string }>;
  ratingvalueid: WebAttribute<RatingValue_Select, { ratingvalueid: string | null }, {  }>;
  statecode: WebAttribute<RatingValue_Select, { statecode: ratingvalue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<RatingValue_Select, { statuscode: ratingvalue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<RatingValue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<RatingValue_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<RatingValue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  value: WebAttribute<RatingValue_Select, { value: number | null }, {  }>;
  versionnumber: WebAttribute<RatingValue_Select, { versionnumber: number | null }, {  }>;
}
interface RatingValue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_isdefault: boolean;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  ratingmodel_guid: XQW.Guid;
  ratingvalueid: XQW.Guid;
  statecode: ratingvalue_statecode;
  statuscode: ratingvalue_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  value: number;
  versionnumber: number;
}
interface RatingValue_Expand {
  RatingModel: WebExpand<RatingValue_Expand, RatingModel_Select, RatingModel_Filter, { RatingModel: RatingModel_Result }>;
  RatingValue_SyncErrors: WebExpand<RatingValue_Expand, SyncError_Select, SyncError_Filter, { RatingValue_SyncErrors: SyncError_Result[] }>;
  createdbyname: WebExpand<RatingValue_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<RatingValue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<RatingValue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<RatingValue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue: WebExpand<RatingValue_Expand, msdyn_characteristicreqforteammember_Select, msdyn_characteristicreqforteammember_Filter, { msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue: msdyn_characteristicreqforteammember_Result[] }>;
  msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue: WebExpand<RatingValue_Expand, msdyn_incidenttypecharacteristic_Select, msdyn_incidenttypecharacteristic_Filter, { msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue: msdyn_incidenttypecharacteristic_Result[] }>;
  msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue: WebExpand<RatingValue_Expand, msdyn_ocliveworkitemcharacteristic_Select, msdyn_ocliveworkitemcharacteristic_Filter, { msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue: msdyn_ocliveworkitemcharacteristic_Result[] }>;
  msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue: WebExpand<RatingValue_Expand, msdyn_requirementcharacteristic_Select, msdyn_requirementcharacteristic_Filter, { msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue: msdyn_requirementcharacteristic_Result[] }>;
  msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue: WebExpand<RatingValue_Expand, msdyn_rolecompetencyrequirement_Select, msdyn_rolecompetencyrequirement_Filter, { msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue: msdyn_rolecompetencyrequirement_Result[] }>;
  msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebExpand<RatingValue_Expand, msdyn_rulesetdependencymapping_Select, msdyn_rulesetdependencymapping_Filter, { msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: msdyn_rulesetdependencymapping_Result[] }>;
  msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue: WebExpand<RatingValue_Expand, msdyn_workordercharacteristic_Select, msdyn_workordercharacteristic_Filter, { msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue: msdyn_workordercharacteristic_Result[] }>;
  msdyn_ratingvalue_skillattachmenttarget: WebExpand<RatingValue_Expand, msdyn_skillattachmenttarget_Select, msdyn_skillattachmenttarget_Filter, { msdyn_ratingvalue_skillattachmenttarget: msdyn_skillattachmenttarget_Result[] }>;
  ownerid: WebExpand<RatingValue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<RatingValue_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<RatingValue_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<RatingValue_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  ratingvalue_AsyncOperations: WebExpand<RatingValue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ratingvalue_AsyncOperations: AsyncOperation_Result[] }>;
  ratingvalue_BulkDeleteFailures: WebExpand<RatingValue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ratingvalue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ratingvalue_DuplicateBaseRecord: WebExpand<RatingValue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { ratingvalue_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  ratingvalue_DuplicateMatchingRecord: WebExpand<RatingValue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { ratingvalue_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  ratingvalue_MailboxTrackingFolders: WebExpand<RatingValue_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { ratingvalue_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  ratingvalue_PrincipalObjectAttributeAccesses: WebExpand<RatingValue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { ratingvalue_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  ratingvalue_ProcessSession: WebExpand<RatingValue_Expand, ProcessSession_Select, ProcessSession_Filter, { ratingvalue_ProcessSession: ProcessSession_Result[] }>;
  ratingvalue_UserEntityInstanceDatas: WebExpand<RatingValue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { ratingvalue_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ratingvalue_bookableresourcecharacteristic_RatingValue: WebExpand<RatingValue_Expand, BookableResourceCharacteristic_Select, BookableResourceCharacteristic_Filter, { ratingvalue_bookableresourcecharacteristic_RatingValue: BookableResourceCharacteristic_Result[] }>;
  transactioncurrencyid: WebExpand<RatingValue_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface RatingValue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  ratingmodel_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface RatingValue_Result extends RatingValue_Base, RatingValue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  ratingmodel_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface RatingValue_RelatedOne {
  RatingModel: WebMappingRetrieve<RatingModel_Select,RatingModel_Expand,RatingModel_Filter,RatingModel_Fixed,RatingModel_Result,RatingModel_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface RatingValue_RelatedMany {
  RatingValue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ratingvalue_msdyn_characteristicreqforteammember_ratingvalue: WebMappingRetrieve<msdyn_characteristicreqforteammember_Select,msdyn_characteristicreqforteammember_Expand,msdyn_characteristicreqforteammember_Filter,msdyn_characteristicreqforteammember_Fixed,msdyn_characteristicreqforteammember_Result,msdyn_characteristicreqforteammember_FormattedResult>;
  msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue: WebMappingRetrieve<msdyn_incidenttypecharacteristic_Select,msdyn_incidenttypecharacteristic_Expand,msdyn_incidenttypecharacteristic_Filter,msdyn_incidenttypecharacteristic_Fixed,msdyn_incidenttypecharacteristic_Result,msdyn_incidenttypecharacteristic_FormattedResult>;
  msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue: WebMappingRetrieve<msdyn_ocliveworkitemcharacteristic_Select,msdyn_ocliveworkitemcharacteristic_Expand,msdyn_ocliveworkitemcharacteristic_Filter,msdyn_ocliveworkitemcharacteristic_Fixed,msdyn_ocliveworkitemcharacteristic_Result,msdyn_ocliveworkitemcharacteristic_FormattedResult>;
  msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue: WebMappingRetrieve<msdyn_requirementcharacteristic_Select,msdyn_requirementcharacteristic_Expand,msdyn_requirementcharacteristic_Filter,msdyn_requirementcharacteristic_Fixed,msdyn_requirementcharacteristic_Result,msdyn_requirementcharacteristic_FormattedResult>;
  msdyn_ratingvalue_msdyn_rolecompetencyrequirement_ratingvalue: WebMappingRetrieve<msdyn_rolecompetencyrequirement_Select,msdyn_rolecompetencyrequirement_Expand,msdyn_rolecompetencyrequirement_Filter,msdyn_rolecompetencyrequirement_Fixed,msdyn_rolecompetencyrequirement_Result,msdyn_rolecompetencyrequirement_FormattedResult>;
  msdyn_ratingvalue_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebMappingRetrieve<msdyn_rulesetdependencymapping_Select,msdyn_rulesetdependencymapping_Expand,msdyn_rulesetdependencymapping_Filter,msdyn_rulesetdependencymapping_Fixed,msdyn_rulesetdependencymapping_Result,msdyn_rulesetdependencymapping_FormattedResult>;
  msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue: WebMappingRetrieve<msdyn_workordercharacteristic_Select,msdyn_workordercharacteristic_Expand,msdyn_workordercharacteristic_Filter,msdyn_workordercharacteristic_Fixed,msdyn_workordercharacteristic_Result,msdyn_workordercharacteristic_FormattedResult>;
  msdyn_ratingvalue_skillattachmenttarget: WebMappingRetrieve<msdyn_skillattachmenttarget_Select,msdyn_skillattachmenttarget_Expand,msdyn_skillattachmenttarget_Filter,msdyn_skillattachmenttarget_Fixed,msdyn_skillattachmenttarget_Result,msdyn_skillattachmenttarget_FormattedResult>;
  ratingvalue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ratingvalue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ratingvalue_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  ratingvalue_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  ratingvalue_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  ratingvalue_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  ratingvalue_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ratingvalue_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  ratingvalue_bookableresourcecharacteristic_RatingValue: WebMappingRetrieve<BookableResourceCharacteristic_Select,BookableResourceCharacteristic_Expand,BookableResourceCharacteristic_Filter,BookableResourceCharacteristic_Fixed,BookableResourceCharacteristic_Result,BookableResourceCharacteristic_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ratingvalues: WebMappingRetrieve<RatingValue_Select,RatingValue_Expand,RatingValue_Filter,RatingValue_Fixed,RatingValue_Result,RatingValue_FormattedResult>;
}
interface WebEntitiesRelated {
  ratingvalues: WebMappingRelated<RatingValue_RelatedOne,RatingValue_RelatedMany>;
}
interface WebEntitiesCUDA {
  ratingvalues: WebMappingCUDA<RatingValue_Create,RatingValue_Update,RatingValue_Select>;
}
