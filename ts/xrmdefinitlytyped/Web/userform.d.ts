interface UserForm_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  formjson?: string | null;
  formxml?: string | null;
  istabletenabled?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  objecttypecode?: string | null;
  type?: userform_type | null;
  userformid?: string | null;
  versionnumber?: number | null;
}
interface UserForm_Relationships {
  UserForm_AsyncOperations?: AsyncOperation_Result[] | null;
  UserForm_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  socialinsightsconfiguration_userform?: SocialInsightsConfiguration_Result[] | null;
  userentityinstancedata_userform?: UserEntityInstanceData_Result[] | null;
}
interface UserForm extends UserForm_Base, UserForm_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UserForm_Create extends UserForm {
}
interface UserForm_Update extends UserForm {
}
interface UserForm_Select {
  createdby_guid: WebAttribute<UserForm_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UserForm_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UserForm_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<UserForm_Select, { description: string | null }, {  }>;
  formjson: WebAttribute<UserForm_Select, { formjson: string | null }, {  }>;
  formxml: WebAttribute<UserForm_Select, { formxml: string | null }, {  }>;
  istabletenabled: WebAttribute<UserForm_Select, { istabletenabled: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<UserForm_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UserForm_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UserForm_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<UserForm_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<UserForm_Select, { objecttypecode: string | null }, {  }>;
  ownerid_guid: WebAttribute<UserForm_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UserForm_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UserForm_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UserForm_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  type: WebAttribute<UserForm_Select, { type: userform_type | null }, { type_formatted?: string }>;
  userformid: WebAttribute<UserForm_Select, { userformid: string | null }, {  }>;
  versionnumber: WebAttribute<UserForm_Select, { versionnumber: number | null }, {  }>;
}
interface UserForm_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  formjson: string;
  formxml: string;
  istabletenabled: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  objecttypecode: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  type: userform_type;
  userformid: XQW.Guid;
  versionnumber: number;
}
interface UserForm_Expand {
  UserForm_AsyncOperations: WebExpand<UserForm_Expand, AsyncOperation_Select, AsyncOperation_Filter, { UserForm_AsyncOperations: AsyncOperation_Result[] }>;
  UserForm_BulkDeleteFailures: WebExpand<UserForm_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { UserForm_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<UserForm_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UserForm_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UserForm_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UserForm_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UserForm_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UserForm_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UserForm_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UserForm_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  socialinsightsconfiguration_userform: WebExpand<UserForm_Expand, SocialInsightsConfiguration_Select, SocialInsightsConfiguration_Filter, { socialinsightsconfiguration_userform: SocialInsightsConfiguration_Result[] }>;
  userentityinstancedata_userform: WebExpand<UserForm_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_userform: UserEntityInstanceData_Result[] }>;
}
interface UserForm_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  type_formatted?: string;
}
interface UserForm_Result extends UserForm_Base, UserForm_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface UserForm_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UserForm_RelatedMany {
  UserForm_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  UserForm_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  socialinsightsconfiguration_userform: WebMappingRetrieve<SocialInsightsConfiguration_Select,SocialInsightsConfiguration_Expand,SocialInsightsConfiguration_Filter,SocialInsightsConfiguration_Fixed,SocialInsightsConfiguration_Result,SocialInsightsConfiguration_FormattedResult>;
  userentityinstancedata_userform: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  userforms: WebMappingRetrieve<UserForm_Select,UserForm_Expand,UserForm_Filter,UserForm_Fixed,UserForm_Result,UserForm_FormattedResult>;
}
interface WebEntitiesRelated {
  userforms: WebMappingRelated<UserForm_RelatedOne,UserForm_RelatedMany>;
}
interface WebEntitiesCUDA {
  userforms: WebMappingCUDA<UserForm_Create,UserForm_Update,UserForm_Select>;
}
