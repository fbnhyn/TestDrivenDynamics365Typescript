interface SolutionComponent_Base extends WebEntity {
  componenttype?: componenttype | null;
  createdon?: Date | null;
  ismetadata?: boolean | null;
  modifiedon?: Date | null;
  objectid?: string | null;
  rootcomponentbehavior?: solutioncomponent_rootcomponentbehavior | null;
  rootsolutioncomponentid?: string | null;
  solutioncomponentid?: string | null;
  versionnumber?: number | null;
}
interface SolutionComponent_Relationships {
  rootsolutioncomponentid_solutioncomponent?: SolutionComponent_Result | null;
  solutioncomponent_parent_solutioncomponent?: SolutionComponent_Result[] | null;
  userentityinstancedata_solutioncomponent?: UserEntityInstanceData_Result[] | null;
}
interface SolutionComponent extends SolutionComponent_Base, SolutionComponent_Relationships {
}
interface SolutionComponent_Create extends SolutionComponent {
}
interface SolutionComponent_Update extends SolutionComponent {
}
interface SolutionComponent_Select {
  componenttype: WebAttribute<SolutionComponent_Select, { componenttype: componenttype | null }, { componenttype_formatted?: string }>;
  createdby_guid: WebAttribute<SolutionComponent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SolutionComponent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SolutionComponent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  ismetadata: WebAttribute<SolutionComponent_Select, { ismetadata: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SolutionComponent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SolutionComponent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SolutionComponent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  objectid: WebAttribute<SolutionComponent_Select, { objectid: string | null }, {  }>;
  rootcomponentbehavior: WebAttribute<SolutionComponent_Select, { rootcomponentbehavior: solutioncomponent_rootcomponentbehavior | null }, { rootcomponentbehavior_formatted?: string }>;
  rootsolutioncomponentid: WebAttribute<SolutionComponent_Select, { rootsolutioncomponentid: string | null }, {  }>;
  solutioncomponentid: WebAttribute<SolutionComponent_Select, { solutioncomponentid: string | null }, {  }>;
  solutionid_guid: WebAttribute<SolutionComponent_Select, { solutionid_guid: string | null }, { solutionid_formatted?: string }>;
  versionnumber: WebAttribute<SolutionComponent_Select, { versionnumber: number | null }, {  }>;
}
interface SolutionComponent_Filter {
  componenttype: componenttype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  ismetadata: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  objectid: XQW.Guid;
  rootcomponentbehavior: solutioncomponent_rootcomponentbehavior;
  rootsolutioncomponentid: XQW.Guid;
  solutioncomponentid: XQW.Guid;
  solutionid_guid: XQW.Guid;
  versionnumber: number;
}
interface SolutionComponent_Expand {
  createdonbehalfby: WebExpand<SolutionComponent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SolutionComponent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  rootsolutioncomponentid_solutioncomponent: WebExpand<SolutionComponent_Expand, SolutionComponent_Select, SolutionComponent_Filter, { rootsolutioncomponentid_solutioncomponent: SolutionComponent_Result }>;
  solutioncomponent_parent_solutioncomponent: WebExpand<SolutionComponent_Expand, SolutionComponent_Select, SolutionComponent_Filter, { solutioncomponent_parent_solutioncomponent: SolutionComponent_Result[] }>;
  solutionid: WebExpand<SolutionComponent_Expand, Solution_Select, Solution_Filter, { solutionid: Solution_Result }>;
  userentityinstancedata_solutioncomponent: WebExpand<SolutionComponent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_solutioncomponent: UserEntityInstanceData_Result[] }>;
}
interface SolutionComponent_FormattedResult {
  componenttype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  rootcomponentbehavior_formatted?: string;
  solutionid_formatted?: string;
}
interface SolutionComponent_Result extends SolutionComponent_Base, SolutionComponent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  solutionid_guid: string | null;
}
interface SolutionComponent_RelatedOne {
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  rootsolutioncomponentid_solutioncomponent: WebMappingRetrieve<SolutionComponent_Select,SolutionComponent_Expand,SolutionComponent_Filter,SolutionComponent_Fixed,SolutionComponent_Result,SolutionComponent_FormattedResult>;
  solutionid: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface SolutionComponent_RelatedMany {
  solutioncomponent_parent_solutioncomponent: WebMappingRetrieve<SolutionComponent_Select,SolutionComponent_Expand,SolutionComponent_Filter,SolutionComponent_Fixed,SolutionComponent_Result,SolutionComponent_FormattedResult>;
  userentityinstancedata_solutioncomponent: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  solutioncomponents: WebMappingRetrieve<SolutionComponent_Select,SolutionComponent_Expand,SolutionComponent_Filter,SolutionComponent_Fixed,SolutionComponent_Result,SolutionComponent_FormattedResult>;
}
interface WebEntitiesRelated {
  solutioncomponents: WebMappingRelated<SolutionComponent_RelatedOne,SolutionComponent_RelatedMany>;
}
interface WebEntitiesCUDA {
  solutioncomponents: WebMappingCUDA<SolutionComponent_Create,SolutionComponent_Update,SolutionComponent_Select>;
}
