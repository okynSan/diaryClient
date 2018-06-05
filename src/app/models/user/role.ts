export class Role {

    private roleId: number;
    private name: string;
    private description: string;

    /**
     * Getter $roleId
     * @return {number}
     */
    public get $roleId(): number {
        return this.roleId;
    }

    /**
     * Setter $roleId
     * @param {number} value
     */
    public set $roleId(value: number) {
        this.roleId = value;
    }

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Getter $description
     * @return {string}
     */
    public get $description(): string {
        return this.description;
    }

    /**
     * Setter $description
     * @param {string} value
     */
    public set $description(value: string) {
        this.description = value;
    }


}
