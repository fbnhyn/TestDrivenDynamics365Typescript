interface SdkMessageProcessingStepImage_Base extends WebEntity {
  attributes?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  description?: string | null;
  entityalias?: string | null;
  imagetype?: sdkmessageprocessingstepimage_imagetype | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  messagepropertyname?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  relatedattributename?: string | null;
  sdkmessageprocessingstepimageid?: string | null;
  sdkmessageprocessingstepimageidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SdkMessageProcessingStepImage_Relationships {
  userentityinstancedata_sdkmessageprocessingstepimage?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessageProcessingStepImage extends SdkMessageProcessingStepImage_Base, SdkMessageProcessingStepImage_Relationships {
  sdkmessageprocessingstepid_bind$sdkmessageprocessingsteps?: string | null;
}
interface SdkMessageProcessingStepImage_Create extends SdkMessageProcessingStepImage {
}
interface SdkMessageProcessingStepImage_Update extends SdkMessageProcessingStepImage {
}
interface SdkMessageProcessingStepImage_Select {
  attributes: WebAttribute<SdkMessageProcessingStepImage_Select, { attributes: string | null }, {  }>;
  componentstate: WebAttribute<SdkMessageProcessingStepImage_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SdkMessageProcessingStepImage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessageProcessingStepImage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessageProcessingStepImage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessageProcessingStepImage_Select, { customizationlevel: number | null }, {  }>;
  description: WebAttribute<SdkMessageProcessingStepImage_Select, { description: string | null }, {  }>;
  entityalias: WebAttribute<SdkMessageProcessingStepImage_Select, { entityalias: string | null }, {  }>;
  imagetype: WebAttribute<SdkMessageProcessingStepImage_Select, { imagetype: sdkmessageprocessingstepimage_imagetype | null }, { imagetype_formatted?: string }>;
  introducedversion: WebAttribute<SdkMessageProcessingStepImage_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<SdkMessageProcessingStepImage_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<SdkMessageProcessingStepImage_Select, { ismanaged: boolean | null }, {  }>;
  messagepropertyname: WebAttribute<SdkMessageProcessingStepImage_Select, { messagepropertyname: string | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessageProcessingStepImage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessageProcessingStepImage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessageProcessingStepImage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SdkMessageProcessingStepImage_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SdkMessageProcessingStepImage_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessageProcessingStepImage_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  relatedattributename: WebAttribute<SdkMessageProcessingStepImage_Select, { relatedattributename: string | null }, {  }>;
  sdkmessageprocessingstepid_guid: WebAttribute<SdkMessageProcessingStepImage_Select, { sdkmessageprocessingstepid_guid: string | null }, { sdkmessageprocessingstepid_formatted?: string }>;
  sdkmessageprocessingstepimageid: WebAttribute<SdkMessageProcessingStepImage_Select, { sdkmessageprocessingstepimageid: string | null }, {  }>;
  sdkmessageprocessingstepimageidunique: WebAttribute<SdkMessageProcessingStepImage_Select, { sdkmessageprocessingstepimageidunique: string | null }, {  }>;
  solutionid: WebAttribute<SdkMessageProcessingStepImage_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SdkMessageProcessingStepImage_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessageProcessingStepImage_Select, { versionnumber: number | null }, {  }>;
}
interface SdkMessageProcessingStepImage_Filter {
  attributes: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  description: string;
  entityalias: string;
  imagetype: sdkmessageprocessingstepimage_imagetype;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  messagepropertyname: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  relatedattributename: string;
  sdkmessageprocessingstepid_guid: XQW.Guid;
  sdkmessageprocessingstepimageid: XQW.Guid;
  sdkmessageprocessingstepimageidunique: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface SdkMessageProcessingStepImage_Expand {
  createdby: WebExpand<SdkMessageProcessingStepImage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessageProcessingStepImage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SdkMessageProcessingStepImage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessageProcessingStepImage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessageProcessingStepImage_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessageprocessingstepid: WebExpand<SdkMessageProcessingStepImage_Expand, SdkMessageProcessingStep_Select, SdkMessageProcessingStep_Filter, { sdkmessageprocessingstepid: SdkMessageProcessingStep_Result }>;
  userentityinstancedata_sdkmessageprocessingstepimage: WebExpand<SdkMessageProcessingStepImage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessageprocessingstepimage: UserEntityInstanceData_Result[] }>;
}
interface SdkMessageProcessingStepImage_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  imagetype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  sdkmessageprocessingstepid_formatted?: string;
}
interface SdkMessageProcessingStepImage_Result extends SdkMessageProcessingStepImage_Base, SdkMessageProcessingStepImage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  sdkmessageprocessingstepid_guid: string | null;
}
interface SdkMessageProcessingStepImage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  sdkmessageprocessingstepid: WebMappingRetrieve<SdkMessageProcessingStep_Select,SdkMessageProcessingStep_Expand,SdkMessageProcessingStep_Filter,SdkMessageProcessingStep_Fixed,SdkMessageProcessingStep_Result,SdkMessageProcessingStep_FormattedResult>;
}
interface SdkMessageProcessingStepImage_RelatedMany {
  userentityinstancedata_sdkmessageprocessingstepimage: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessageprocessingstepimages: WebMappingRetrieve<SdkMessageProcessingStepImage_Select,SdkMessageProcessingStepImage_Expand,SdkMessageProcessingStepImage_Filter,SdkMessageProcessingStepImage_Fixed,SdkMessageProcessingStepImage_Result,SdkMessageProcessingStepImage_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessageprocessingstepimages: WebMappingRelated<SdkMessageProcessingStepImage_RelatedOne,SdkMessageProcessingStepImage_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessageprocessingstepimages: WebMappingCUDA<SdkMessageProcessingStepImage_Create,SdkMessageProcessingStepImage_Update,SdkMessageProcessingStepImage_Select>;
}
