
import React from 'react';

abstract class RecipeTable extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            tableEntries: [],
            tableHeaders: [],
        }
    }

    componentDidMount(): void {
        this.retrieveTableEntries();
        this.setTableHeaders();
    }

    abstract setTableHeaders(): void;

    abstract retrieveTableEntries(): void;

    abstract createTableEntry(tableEntry: any): JSX.Element;

    abstract createTableButtons(): JSX.Element;

    render(): React.ReactNode {
        return (
            <table >
                <thead>
                    <tr>
                        {this.state.tableHeaders.map((tableHeader: any) => {
                            return (<th>{tableHeader}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableEntries.map((tableEntry: any) => {
                        return (this.createTableEntry(tableEntry))
                    })}
                    
                        {this.createTableButtons()}
                    
                </tbody>
            </table >
        )
    }
}
export default RecipeTable