interface SystemForm_Base extends WebEntity {
  canbedeleted?: any | null;
  componentstate?: componentstate | null;
  description?: string | null;
  formactivationstate?: systemform_formactivationstate | null;
  formid?: string | null;
  formidunique?: string | null;
  formjson?: string | null;
  formpresentation?: systemform_formpresentation | null;
  formxml?: string | null;
  formxmlmanaged?: string | null;
  introducedversion?: string | null;
  isairmerged?: boolean | null;
  iscustomizable?: any | null;
  isdefault?: boolean | null;
  isdesktopenabled?: boolean | null;
  ismanaged?: boolean | null;
  istabletenabled?: boolean | null;
  name?: string | null;
  objecttypecode?: string | null;
  overwritetime?: Date | null;
  publishedon?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  type?: systemform_type | null;
  uniquename?: string | null;
  version?: number | null;
  versionnumber?: number | null;
}
interface SystemForm_Relationships {
  SystemForm_AsyncOperations?: AsyncOperation_Result[] | null;
  SystemForm_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  form_ancestor_form?: SystemForm_Result[] | null;
  processtrigger_systemform?: ProcessTrigger_Result[] | null;
  socialinsightsconfiguration_systemform?: SocialInsightsConfiguration_Result[] | null;
}
interface SystemForm extends SystemForm_Base, SystemForm_Relationships {
}
interface SystemForm_Create extends SystemForm {
  ancestorformid_bind$systemforms?: string | null;
}
interface SystemForm_Update extends SystemForm {
}
interface SystemForm_Select {
  ancestorformid_guid: WebAttribute<SystemForm_Select, { ancestorformid_guid: string | null }, { ancestorformid_formatted?: string }>;
  canbedeleted: WebAttribute<SystemForm_Select, { canbedeleted: any | null }, {  }>;
  componentstate: WebAttribute<SystemForm_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  description: WebAttribute<SystemForm_Select, { description: string | null }, {  }>;
  formactivationstate: WebAttribute<SystemForm_Select, { formactivationstate: systemform_formactivationstate | null }, { formactivationstate_formatted?: string }>;
  formid: WebAttribute<SystemForm_Select, { formid: string | null }, {  }>;
  formidunique: WebAttribute<SystemForm_Select, { formidunique: string | null }, {  }>;
  formjson: WebAttribute<SystemForm_Select, { formjson: string | null }, {  }>;
  formpresentation: WebAttribute<SystemForm_Select, { formpresentation: systemform_formpresentation | null }, { formpresentation_formatted?: string }>;
  formxml: WebAttribute<SystemForm_Select, { formxml: string | null }, {  }>;
  formxmlmanaged: WebAttribute<SystemForm_Select, { formxmlmanaged: string | null }, {  }>;
  introducedversion: WebAttribute<SystemForm_Select, { introducedversion: string | null }, {  }>;
  isairmerged: WebAttribute<SystemForm_Select, { isairmerged: boolean | null }, {  }>;
  iscustomizable: WebAttribute<SystemForm_Select, { iscustomizable: any | null }, {  }>;
  isdefault: WebAttribute<SystemForm_Select, { isdefault: boolean | null }, {  }>;
  isdesktopenabled: WebAttribute<SystemForm_Select, { isdesktopenabled: boolean | null }, {  }>;
  ismanaged: WebAttribute<SystemForm_Select, { ismanaged: boolean | null }, {  }>;
  istabletenabled: WebAttribute<SystemForm_Select, { istabletenabled: boolean | null }, {  }>;
  name: WebAttribute<SystemForm_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<SystemForm_Select, { objecttypecode: string | null }, {  }>;
  organizationid_guid: WebAttribute<SystemForm_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SystemForm_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  publishedon: WebAttribute<SystemForm_Select, { publishedon: Date | null }, { publishedon_formatted?: string }>;
  solutionid: WebAttribute<SystemForm_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SystemForm_Select, { supportingsolutionid: string | null }, {  }>;
  type: WebAttribute<SystemForm_Select, { type: systemform_type | null }, { type_formatted?: string }>;
  uniquename: WebAttribute<SystemForm_Select, { uniquename: string | null }, {  }>;
  version: WebAttribute<SystemForm_Select, { version: number | null }, {  }>;
  versionnumber: WebAttribute<SystemForm_Select, { versionnumber: number | null }, {  }>;
}
interface SystemForm_Filter {
  ancestorformid_guid: XQW.Guid;
  canbedeleted: any;
  componentstate: componentstate;
  description: string;
  formactivationstate: systemform_formactivationstate;
  formid: XQW.Guid;
  formidunique: XQW.Guid;
  formjson: string;
  formpresentation: systemform_formpresentation;
  formxml: string;
  formxmlmanaged: string;
  introducedversion: string;
  isairmerged: boolean;
  iscustomizable: any;
  isdefault: boolean;
  isdesktopenabled: boolean;
  ismanaged: boolean;
  istabletenabled: boolean;
  name: string;
  objecttypecode: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  publishedon: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  type: systemform_type;
  uniquename: string;
  version: number;
  versionnumber: number;
}
interface SystemForm_Expand {
  SystemForm_AsyncOperations: WebExpand<SystemForm_Expand, AsyncOperation_Select, AsyncOperation_Filter, { SystemForm_AsyncOperations: AsyncOperation_Result[] }>;
  SystemForm_BulkDeleteFailures: WebExpand<SystemForm_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { SystemForm_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ancestorformid: WebExpand<SystemForm_Expand, SystemForm_Select, SystemForm_Filter, { ancestorformid: SystemForm_Result }>;
  form_ancestor_form: WebExpand<SystemForm_Expand, SystemForm_Select, SystemForm_Filter, { form_ancestor_form: SystemForm_Result[] }>;
  organizationid: WebExpand<SystemForm_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processtrigger_systemform: WebExpand<SystemForm_Expand, ProcessTrigger_Select, ProcessTrigger_Filter, { processtrigger_systemform: ProcessTrigger_Result[] }>;
  socialinsightsconfiguration_systemform: WebExpand<SystemForm_Expand, SocialInsightsConfiguration_Select, SocialInsightsConfiguration_Filter, { socialinsightsconfiguration_systemform: SocialInsightsConfiguration_Result[] }>;
}
interface SystemForm_FormattedResult {
  ancestorformid_formatted?: string;
  componentstate_formatted?: string;
  formactivationstate_formatted?: string;
  formpresentation_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  publishedon_formatted?: string;
  type_formatted?: string;
}
interface SystemForm_Result extends SystemForm_Base, SystemForm_Relationships {
  "@odata.etag": string;
  ancestorformid_guid: string | null;
  organizationid_guid: string | null;
}
interface SystemForm_RelatedOne {
  ancestorformid: WebMappingRetrieve<SystemForm_Select,SystemForm_Expand,SystemForm_Filter,SystemForm_Fixed,SystemForm_Result,SystemForm_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SystemForm_RelatedMany {
  SystemForm_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  SystemForm_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  form_ancestor_form: WebMappingRetrieve<SystemForm_Select,SystemForm_Expand,SystemForm_Filter,SystemForm_Fixed,SystemForm_Result,SystemForm_FormattedResult>;
  processtrigger_systemform: WebMappingRetrieve<ProcessTrigger_Select,ProcessTrigger_Expand,ProcessTrigger_Filter,ProcessTrigger_Fixed,ProcessTrigger_Result,ProcessTrigger_FormattedResult>;
  socialinsightsconfiguration_systemform: WebMappingRetrieve<SocialInsightsConfiguration_Select,SocialInsightsConfiguration_Expand,SocialInsightsConfiguration_Filter,SocialInsightsConfiguration_Fixed,SocialInsightsConfiguration_Result,SocialInsightsConfiguration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  systemforms: WebMappingRetrieve<SystemForm_Select,SystemForm_Expand,SystemForm_Filter,SystemForm_Fixed,SystemForm_Result,SystemForm_FormattedResult>;
}
interface WebEntitiesRelated {
  systemforms: WebMappingRelated<SystemForm_RelatedOne,SystemForm_RelatedMany>;
}
interface WebEntitiesCUDA {
  systemforms: WebMappingCUDA<SystemForm_Create,SystemForm_Update,SystemForm_Select>;
}
