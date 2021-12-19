interface SdkMessageFilter_Base extends WebEntity {
  availability?: number | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  introducedversion?: string | null;
  iscustomprocessingstepallowed?: boolean | null;
  ismanaged?: boolean | null;
  isvisible?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  primaryobjecttypecode?: string | null;
  restrictionlevel?: number | null;
  sdkmessagefilterid?: string | null;
  sdkmessagefilteridunique?: string | null;
  secondaryobjecttypecode?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
  workflowsdkstepenabled?: boolean | null;
}
interface SdkMessageFilter_Relationships {
  InternalCatalogAssignmentId?: InternalCatalogAssignment_Result[] | null;
  sdkmessagefilterid_sdkmessageprocessingstep?: SdkMessageProcessingStep_Result[] | null;
  userentityinstancedata_sdkmessagefilter?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessageFilter extends SdkMessageFilter_Base, SdkMessageFilter_Relationships {
}
interface SdkMessageFilter_Create extends SdkMessageFilter {
  sdkmessageid_bind$sdkmessages?: string | null;
}
interface SdkMessageFilter_Update extends SdkMessageFilter {
}
interface SdkMessageFilter_Select {
  availability: WebAttribute<SdkMessageFilter_Select, { availability: number | null }, {  }>;
  componentstate: WebAttribute<SdkMessageFilter_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SdkMessageFilter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessageFilter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessageFilter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessageFilter_Select, { customizationlevel: number | null }, {  }>;
  introducedversion: WebAttribute<SdkMessageFilter_Select, { introducedversion: string | null }, {  }>;
  iscustomprocessingstepallowed: WebAttribute<SdkMessageFilter_Select, { iscustomprocessingstepallowed: boolean | null }, {  }>;
  ismanaged: WebAttribute<SdkMessageFilter_Select, { ismanaged: boolean | null }, {  }>;
  isvisible: WebAttribute<SdkMessageFilter_Select, { isvisible: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessageFilter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessageFilter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessageFilter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SdkMessageFilter_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SdkMessageFilter_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessageFilter_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  primaryobjecttypecode: WebAttribute<SdkMessageFilter_Select, { primaryobjecttypecode: string | null }, {  }>;
  restrictionlevel: WebAttribute<SdkMessageFilter_Select, { restrictionlevel: number | null }, {  }>;
  sdkmessagefilterid: WebAttribute<SdkMessageFilter_Select, { sdkmessagefilterid: string | null }, {  }>;
  sdkmessagefilteridunique: WebAttribute<SdkMessageFilter_Select, { sdkmessagefilteridunique: string | null }, {  }>;
  sdkmessageid_guid: WebAttribute<SdkMessageFilter_Select, { sdkmessageid_guid: string | null }, { sdkmessageid_formatted?: string }>;
  secondaryobjecttypecode: WebAttribute<SdkMessageFilter_Select, { secondaryobjecttypecode: string | null }, {  }>;
  solutionid: WebAttribute<SdkMessageFilter_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SdkMessageFilter_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessageFilter_Select, { versionnumber: number | null }, {  }>;
  workflowsdkstepenabled: WebAttribute<SdkMessageFilter_Select, { workflowsdkstepenabled: boolean | null }, {  }>;
}
interface SdkMessageFilter_Filter {
  availability: number;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  introducedversion: string;
  iscustomprocessingstepallowed: boolean;
  ismanaged: boolean;
  isvisible: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  primaryobjecttypecode: string;
  restrictionlevel: number;
  sdkmessagefilterid: XQW.Guid;
  sdkmessagefilteridunique: XQW.Guid;
  sdkmessageid_guid: XQW.Guid;
  secondaryobjecttypecode: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
  workflowsdkstepenabled: boolean;
}
interface SdkMessageFilter_Expand {
  InternalCatalogAssignmentId: WebExpand<SdkMessageFilter_Expand, InternalCatalogAssignment_Select, InternalCatalogAssignment_Filter, { InternalCatalogAssignmentId: InternalCatalogAssignment_Result[] }>;
  createdby: WebExpand<SdkMessageFilter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessageFilter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SdkMessageFilter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessageFilter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessageFilter_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessagefilterid_sdkmessageprocessingstep: WebExpand<SdkMessageFilter_Expand, SdkMessageProcessingStep_Select, SdkMessageProcessingStep_Filter, { sdkmessagefilterid_sdkmessageprocessingstep: SdkMessageProcessingStep_Result[] }>;
  sdkmessageid: WebExpand<SdkMessageFilter_Expand, SdkMessage_Select, SdkMessage_Filter, { sdkmessageid: SdkMessage_Result }>;
  userentityinstancedata_sdkmessagefilter: WebExpand<SdkMessageFilter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessagefilter: UserEntityInstanceData_Result[] }>;
}
interface SdkMessageFilter_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  sdkmessageid_formatted?: string;
}
interface SdkMessageFilter_Result extends SdkMessageFilter_Base, SdkMessageFilter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  sdkmessageid_guid: string | null;
}
interface SdkMessageFilter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  sdkmessageid: WebMappingRetrieve<SdkMessage_Select,SdkMessage_Expand,SdkMessage_Filter,SdkMessage_Fixed,SdkMessage_Result,SdkMessage_FormattedResult>;
}
interface SdkMessageFilter_RelatedMany {
  InternalCatalogAssignmentId: WebMappingRetrieve<InternalCatalogAssignment_Select,InternalCatalogAssignment_Expand,InternalCatalogAssignment_Filter,InternalCatalogAssignment_Fixed,InternalCatalogAssignment_Result,InternalCatalogAssignment_FormattedResult>;
  sdkmessagefilterid_sdkmessageprocessingstep: WebMappingRetrieve<SdkMessageProcessingStep_Select,SdkMessageProcessingStep_Expand,SdkMessageProcessingStep_Filter,SdkMessageProcessingStep_Fixed,SdkMessageProcessingStep_Result,SdkMessageProcessingStep_FormattedResult>;
  userentityinstancedata_sdkmessagefilter: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessagefilters: WebMappingRetrieve<SdkMessageFilter_Select,SdkMessageFilter_Expand,SdkMessageFilter_Filter,SdkMessageFilter_Fixed,SdkMessageFilter_Result,SdkMessageFilter_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessagefilters: WebMappingRelated<SdkMessageFilter_RelatedOne,SdkMessageFilter_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessagefilters: WebMappingCUDA<SdkMessageFilter_Create,SdkMessageFilter_Update,SdkMessageFilter_Select>;
}
