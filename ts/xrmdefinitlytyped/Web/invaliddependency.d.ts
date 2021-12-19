interface InvalidDependency_Base extends WebEntity {
  existingcomponentid?: string | null;
  existingcomponenttype?: componenttype | null;
  existingdependencytype?: dependencytype | null;
  invaliddependencyid?: string | null;
  isexistingnoderequiredcomponent?: boolean | null;
  missingcomponentid?: string | null;
  missingcomponentinfo?: string | null;
  missingcomponentlookuptype?: number | null;
  missingcomponenttype?: componenttype | null;
}
interface InvalidDependency_Relationships {
  userentityinstancedata_invaliddependency?: UserEntityInstanceData_Result[] | null;
}
interface InvalidDependency extends InvalidDependency_Base, InvalidDependency_Relationships {
}
interface InvalidDependency_Create extends InvalidDependency {
}
interface InvalidDependency_Update extends InvalidDependency {
}
interface InvalidDependency_Select {
  existingcomponentid: WebAttribute<InvalidDependency_Select, { existingcomponentid: string | null }, {  }>;
  existingcomponenttype: WebAttribute<InvalidDependency_Select, { existingcomponenttype: componenttype | null }, { existingcomponenttype_formatted?: string }>;
  existingdependencytype: WebAttribute<InvalidDependency_Select, { existingdependencytype: dependencytype | null }, { existingdependencytype_formatted?: string }>;
  invaliddependencyid: WebAttribute<InvalidDependency_Select, { invaliddependencyid: string | null }, {  }>;
  isexistingnoderequiredcomponent: WebAttribute<InvalidDependency_Select, { isexistingnoderequiredcomponent: boolean | null }, {  }>;
  missingcomponentid: WebAttribute<InvalidDependency_Select, { missingcomponentid: string | null }, {  }>;
  missingcomponentinfo: WebAttribute<InvalidDependency_Select, { missingcomponentinfo: string | null }, {  }>;
  missingcomponentlookuptype: WebAttribute<InvalidDependency_Select, { missingcomponentlookuptype: number | null }, {  }>;
  missingcomponenttype: WebAttribute<InvalidDependency_Select, { missingcomponenttype: componenttype | null }, { missingcomponenttype_formatted?: string }>;
}
interface InvalidDependency_Filter {
  existingcomponentid: XQW.Guid;
  existingcomponenttype: componenttype;
  existingdependencytype: dependencytype;
  invaliddependencyid: XQW.Guid;
  isexistingnoderequiredcomponent: boolean;
  missingcomponentid: XQW.Guid;
  missingcomponentinfo: string;
  missingcomponentlookuptype: number;
  missingcomponenttype: componenttype;
}
interface InvalidDependency_Expand {
  userentityinstancedata_invaliddependency: WebExpand<InvalidDependency_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_invaliddependency: UserEntityInstanceData_Result[] }>;
}
interface InvalidDependency_FormattedResult {
  existingcomponenttype_formatted?: string;
  existingdependencytype_formatted?: string;
  missingcomponenttype_formatted?: string;
}
interface InvalidDependency_Result extends InvalidDependency_Base, InvalidDependency_Relationships {
  "@odata.etag": string;
}
interface InvalidDependency_RelatedOne {
}
interface InvalidDependency_RelatedMany {
  userentityinstancedata_invaliddependency: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  invaliddependencies: WebMappingRetrieve<InvalidDependency_Select,InvalidDependency_Expand,InvalidDependency_Filter,InvalidDependency_Fixed,InvalidDependency_Result,InvalidDependency_FormattedResult>;
}
interface WebEntitiesRelated {
  invaliddependencies: WebMappingRelated<InvalidDependency_RelatedOne,InvalidDependency_RelatedMany>;
}
interface WebEntitiesCUDA {
  invaliddependencies: WebMappingCUDA<InvalidDependency_Create,InvalidDependency_Update,InvalidDependency_Select>;
}
