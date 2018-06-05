import { Role } from "./role";

export class Userxrole {

    private roleXUser: number;
    private roleId: Array<Role>;


    /**
     * Getter $roleXUser
     * @return {number}
     */
    public get $roleXUser(): number {
        return this.roleXUser;
    }

    /**
     * Setter $roleXUser
     * @param {number} value
     */
    public set $roleXUser(value: number) {
        this.roleXUser = value;
    }

    /**
     * Getter $roleId
     * @return {Array<Role>}
     */
    public get $roleId(): Array<Role> {
        return this.roleId;
    }

    /**
     * Setter $roleId
     * @param {Array<Role>} value
     */
    public set $roleId(value: Array<Role>) {
        this.roleId = value;
    }

}
