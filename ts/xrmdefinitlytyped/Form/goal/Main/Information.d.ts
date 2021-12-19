declare namespace Form.goal.Main {
  namespace Information {
    namespace Tabs {
      interface _242FCD832A50478E922AF4641920DDE0 extends Xrm.SectionCollectionBase {
        get(name: "{8ECDE6CB-085B-46D1-97A9-E357C5799076}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _349a439d6ed5bae87c7d3721869367ca extends Xrm.SectionCollectionBase {
        get(name: "{3a5c2dc2-2ee7-848c-83eb-a2b1e4d1c703}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actualdecimal"): Xrm.NumberAttribute;
      get(name: "actualinteger"): Xrm.NumberAttribute;
      get(name: "actualmoney"): Xrm.NumberAttribute;
      get(name: "consideronlygoalownersrecords"): Xrm.OptionSetAttribute<boolean>;
      get(name: "customrollupfielddecimal"): Xrm.NumberAttribute;
      get(name: "customrollupfieldinteger"): Xrm.NumberAttribute;
      get(name: "customrollupfieldmoney"): Xrm.NumberAttribute;
      get(name: "fiscalperiod"): Xrm.OptionSetAttribute<goal_fiscalperiod>;
      get(name: "fiscalyear"): Xrm.OptionSetAttribute<goal_fiscalyear>;
      get(name: "goalenddate"): Xrm.DateAttribute;
      get(name: "goalownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "goalstartdate"): Xrm.DateAttribute;
      get(name: "inprogressdecimal"): Xrm.NumberAttribute;
      get(name: "inprogressinteger"): Xrm.NumberAttribute;
      get(name: "inprogressmoney"): Xrm.NumberAttribute;
      get(name: "isfiscalperiodgoal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "lastrolledupdate"): Xrm.DateAttribute;
      get(name: "metricid"): Xrm.LookupAttribute<"metric">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "parentgoalid"): Xrm.LookupAttribute<"goal">;
      get(name: "percentage"): Xrm.NumberAttribute;
      get(name: "rolluponlyfromchildgoals"): Xrm.OptionSetAttribute<boolean>;
      get(name: "rollupqueryactualdecimalid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "rollupqueryactualintegerid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "rollupqueryactualmoneyid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "rollupquerycustomdecimalid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "rollupquerycustomintegerid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "rollupquerycustommoneyid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "rollupqueryinprogressdecimalid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "rollupqueryinprogressintegerid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "rollupqueryinprogressmoneyid"): Xrm.LookupAttribute<"goalrollupquery">;
      get(name: "statecode"): Xrm.OptionSetAttribute<goal_statecode>;
      get(name: "stretchtargetdecimal"): Xrm.NumberAttribute;
      get(name: "stretchtargetinteger"): Xrm.NumberAttribute;
      get(name: "stretchtargetmoney"): Xrm.NumberAttribute;
      get(name: "targetdecimal"): Xrm.NumberAttribute;
      get(name: "targetinteger"): Xrm.NumberAttribute;
      get(name: "targetmoney"): Xrm.NumberAttribute;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "actualdecimal"): Xrm.NumberControl;
      get(name: "actualinteger"): Xrm.NumberControl;
      get(name: "actualmoney"): Xrm.NumberControl;
      get(name: "child_goals"): Xrm.SubGridControl<"goal">;
      get(name: "consideronlygoalownersrecords"): Xrm.OptionSetControl<boolean>;
      get(name: "customrollupfielddecimal"): Xrm.NumberControl;
      get(name: "customrollupfieldinteger"): Xrm.NumberControl;
      get(name: "customrollupfieldmoney"): Xrm.NumberControl;
      get(name: "fiscalperiod"): Xrm.OptionSetControl<goal_fiscalperiod>;
      get(name: "fiscalyear"): Xrm.OptionSetControl<goal_fiscalyear>;
      get(name: "footer_statecode"): Xrm.OptionSetControl<goal_statecode>;
      get(name: "goalenddate"): Xrm.DateControl;
      get(name: "goalownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "goalstartdate"): Xrm.DateControl;
      get(name: "inprogressdecimal"): Xrm.NumberControl;
      get(name: "inprogressinteger"): Xrm.NumberControl;
      get(name: "inprogressmoney"): Xrm.NumberControl;
      get(name: "isfiscalperiodgoal"): Xrm.OptionSetControl<boolean>;
      get(name: "lastrolledupdate"): Xrm.DateControl;
      get(name: "metricid"): Xrm.LookupControl<"metric">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser">;
      get(name: "parentgoalid"): Xrm.LookupControl<"goal">;
      get(name: "participatingrecordcontrol"): Xrm.LookupControl<"metric">;
      get(name: "percentage"): Xrm.NumberControl;
      get(name: "percentage1"): Xrm.NumberControl;
      get(name: "percentage2"): Xrm.NumberControl;
      get(name: "rolluponlyfromchildgoals"): Xrm.OptionSetControl<boolean>;
      get(name: "rollupqueryactualdecimalid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "rollupqueryactualintegerid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "rollupqueryactualmoneyid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "rollupquerycustomdecimalid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "rollupquerycustomintegerid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "rollupquerycustommoneyid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "rollupqueryinprogressdecimalid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "rollupqueryinprogressintegerid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "rollupqueryinprogressmoneyid"): Xrm.LookupControl<"goalrollupquery">;
      get(name: "stretchtargetdecimal"): Xrm.NumberControl;
      get(name: "stretchtargetinteger"): Xrm.NumberControl;
      get(name: "stretchtargetmoney"): Xrm.NumberControl;
      get(name: "targetdecimal"): Xrm.NumberControl;
      get(name: "targetinteger"): Xrm.NumberControl;
      get(name: "targetmoney"): Xrm.NumberControl;
      get(name: "title"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{242FCD83-2A50-478E-922A-F4641920DDE0}"): Xrm.PageTab<Tabs._242FCD832A50478E922AF4641920DDE0>;
      get(name: "{349a439d-6ed5-bae8-7c7d-3721869367ca}"): Xrm.PageTab<Tabs._349a439d6ed5bae87c7d3721869367ca>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "actualdecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "actualinteger"): Xrm.NumberAttribute;
    getAttribute(attributeName: "actualmoney"): Xrm.NumberAttribute;
    getAttribute(attributeName: "consideronlygoalownersrecords"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "customrollupfielddecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "customrollupfieldinteger"): Xrm.NumberAttribute;
    getAttribute(attributeName: "customrollupfieldmoney"): Xrm.NumberAttribute;
    getAttribute(attributeName: "fiscalperiod"): Xrm.OptionSetAttribute<goal_fiscalperiod>;
    getAttribute(attributeName: "fiscalyear"): Xrm.OptionSetAttribute<goal_fiscalyear>;
    getAttribute(attributeName: "goalenddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "goalownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "goalstartdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "inprogressdecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "inprogressinteger"): Xrm.NumberAttribute;
    getAttribute(attributeName: "inprogressmoney"): Xrm.NumberAttribute;
    getAttribute(attributeName: "isfiscalperiodgoal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "lastrolledupdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "metricid"): Xrm.LookupAttribute<"metric">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "parentgoalid"): Xrm.LookupAttribute<"goal">;
    getAttribute(attributeName: "percentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "rolluponlyfromchildgoals"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "rollupqueryactualdecimalid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "rollupqueryactualintegerid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "rollupqueryactualmoneyid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "rollupquerycustomdecimalid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "rollupquerycustomintegerid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "rollupquerycustommoneyid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "rollupqueryinprogressdecimalid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "rollupqueryinprogressintegerid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "rollupqueryinprogressmoneyid"): Xrm.LookupAttribute<"goalrollupquery">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<goal_statecode>;
    getAttribute(attributeName: "stretchtargetdecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "stretchtargetinteger"): Xrm.NumberAttribute;
    getAttribute(attributeName: "stretchtargetmoney"): Xrm.NumberAttribute;
    getAttribute(attributeName: "targetdecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "targetinteger"): Xrm.NumberAttribute;
    getAttribute(attributeName: "targetmoney"): Xrm.NumberAttribute;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "actualdecimal"): Xrm.NumberControl;
    getControl(controlName: "actualinteger"): Xrm.NumberControl;
    getControl(controlName: "actualmoney"): Xrm.NumberControl;
    getControl(controlName: "child_goals"): Xrm.SubGridControl<"goal">;
    getControl(controlName: "consideronlygoalownersrecords"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "customrollupfielddecimal"): Xrm.NumberControl;
    getControl(controlName: "customrollupfieldinteger"): Xrm.NumberControl;
    getControl(controlName: "customrollupfieldmoney"): Xrm.NumberControl;
    getControl(controlName: "fiscalperiod"): Xrm.OptionSetControl<goal_fiscalperiod>;
    getControl(controlName: "fiscalyear"): Xrm.OptionSetControl<goal_fiscalyear>;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<goal_statecode>;
    getControl(controlName: "goalenddate"): Xrm.DateControl;
    getControl(controlName: "goalownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "goalstartdate"): Xrm.DateControl;
    getControl(controlName: "inprogressdecimal"): Xrm.NumberControl;
    getControl(controlName: "inprogressinteger"): Xrm.NumberControl;
    getControl(controlName: "inprogressmoney"): Xrm.NumberControl;
    getControl(controlName: "isfiscalperiodgoal"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "lastrolledupdate"): Xrm.DateControl;
    getControl(controlName: "metricid"): Xrm.LookupControl<"metric">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "parentgoalid"): Xrm.LookupControl<"goal">;
    getControl(controlName: "participatingrecordcontrol"): Xrm.LookupControl<"metric">;
    getControl(controlName: "percentage"): Xrm.NumberControl;
    getControl(controlName: "percentage1"): Xrm.NumberControl;
    getControl(controlName: "percentage2"): Xrm.NumberControl;
    getControl(controlName: "rolluponlyfromchildgoals"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "rollupqueryactualdecimalid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "rollupqueryactualintegerid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "rollupqueryactualmoneyid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "rollupquerycustomdecimalid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "rollupquerycustomintegerid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "rollupquerycustommoneyid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "rollupqueryinprogressdecimalid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "rollupqueryinprogressintegerid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "rollupqueryinprogressmoneyid"): Xrm.LookupControl<"goalrollupquery">;
    getControl(controlName: "stretchtargetdecimal"): Xrm.NumberControl;
    getControl(controlName: "stretchtargetinteger"): Xrm.NumberControl;
    getControl(controlName: "stretchtargetmoney"): Xrm.NumberControl;
    getControl(controlName: "targetdecimal"): Xrm.NumberControl;
    getControl(controlName: "targetinteger"): Xrm.NumberControl;
    getControl(controlName: "targetmoney"): Xrm.NumberControl;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
