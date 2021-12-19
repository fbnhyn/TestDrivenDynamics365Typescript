interface BusinessUnitMap_Base extends WebEntity {
  businessid?: string | null;
  businessunitmapid?: string | null;
  subbusinessid?: string | null;
  versionnumber?: number | null;
}
interface BusinessUnitMap_Relationships {
  businessid_businessunit?: BusinessUnit_Result | null;
  businessid_systemuser?: SystemUser_Result | null;
  subbusinessid_businessunit?: BusinessUnit_Result | null;
  subbusinessid_constraintbasedgroup?: ConstraintBasedGroup_Result | null;
  subbusinessid_equipment?: Equipment_Result | null;
  userentityinstancedata_businessunitmap?: UserEntityInstanceData_Result[] | null;
}
interface BusinessUnitMap extends BusinessUnitMap_Base, BusinessUnitMap_Relationships {
}
interface BusinessUnitMap_Create extends BusinessUnitMap {
  businessid_businessunit_bind$businessunits?: string | null;
  businessid_systemuser_bind$systemusers?: string | null;
  subbusinessid_businessunit_bind$businessunits?: string | null;
  subbusinessid_constraintbasedgroup_bind$constraintbasedgroups?: string | null;
  subbusinessid_equipment_bind$equipments?: string | null;
}
interface BusinessUnitMap_Update extends BusinessUnitMap {
}
interface BusinessUnitMap_Select {
  businessid: WebAttribute<BusinessUnitMap_Select, { businessid: string | null }, {  }>;
  businessunitmapid: WebAttribute<BusinessUnitMap_Select, { businessunitmapid: string | null }, {  }>;
  subbusinessid: WebAttribute<BusinessUnitMap_Select, { subbusinessid: string | null }, {  }>;
  versionnumber: WebAttribute<BusinessUnitMap_Select, { versionnumber: number | null }, {  }>;
}
interface BusinessUnitMap_Filter {
  businessid: XQW.Guid;
  businessunitmapid: XQW.Guid;
  subbusinessid: XQW.Guid;
  versionnumber: number;
}
interface BusinessUnitMap_Expand {
  businessid_businessunit: WebExpand<BusinessUnitMap_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessid_businessunit: BusinessUnit_Result }>;
  businessid_systemuser: WebExpand<BusinessUnitMap_Expand, SystemUser_Select, SystemUser_Filter, { businessid_systemuser: SystemUser_Result }>;
  subbusinessid_businessunit: WebExpand<BusinessUnitMap_Expand, BusinessUnit_Select, BusinessUnit_Filter, { subbusinessid_businessunit: BusinessUnit_Result }>;
  subbusinessid_constraintbasedgroup: WebExpand<BusinessUnitMap_Expand, ConstraintBasedGroup_Select, ConstraintBasedGroup_Filter, { subbusinessid_constraintbasedgroup: ConstraintBasedGroup_Result }>;
  subbusinessid_equipment: WebExpand<BusinessUnitMap_Expand, Equipment_Select, Equipment_Filter, { subbusinessid_equipment: Equipment_Result }>;
  userentityinstancedata_businessunitmap: WebExpand<BusinessUnitMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_businessunitmap: UserEntityInstanceData_Result[] }>;
}
interface BusinessUnitMap_FormattedResult {
}
interface BusinessUnitMap_Result extends BusinessUnitMap_Base, BusinessUnitMap_Relationships {
  "@odata.etag": string;
}
interface BusinessUnitMap_RelatedOne {
  businessid_businessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  businessid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  subbusinessid_businessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  subbusinessid_constraintbasedgroup: WebMappingRetrieve<ConstraintBasedGroup_Select,ConstraintBasedGroup_Expand,ConstraintBasedGroup_Filter,ConstraintBasedGroup_Fixed,ConstraintBasedGroup_Result,ConstraintBasedGroup_FormattedResult>;
  subbusinessid_equipment: WebMappingRetrieve<Equipment_Select,Equipment_Expand,Equipment_Filter,Equipment_Fixed,Equipment_Result,Equipment_FormattedResult>;
}
interface BusinessUnitMap_RelatedMany {
  userentityinstancedata_businessunitmap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  businessunitmaps: WebMappingRetrieve<BusinessUnitMap_Select,BusinessUnitMap_Expand,BusinessUnitMap_Filter,BusinessUnitMap_Fixed,BusinessUnitMap_Result,BusinessUnitMap_FormattedResult>;
}
interface WebEntitiesRelated {
  businessunitmaps: WebMappingRelated<BusinessUnitMap_RelatedOne,BusinessUnitMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  businessunitmaps: WebMappingCUDA<BusinessUnitMap_Create,BusinessUnitMap_Update,BusinessUnitMap_Select>;
}
