import { Userxrole } from "./userxrole";

export class User {

    private userId: number;
    private name: string;
    private firstName: string;
    private lastName: string;
    private password: string;
    private eMail: string;

    private roleXUserSet: Array<Userxrole>;


    /**
     * Getter $roleXUserSet
     * @return {Array<Userxrole>}
     */
	public get $roleXUserSet(): Array<Userxrole> {
		return this.roleXUserSet;
	}

    /**
     * Setter $roleXUserSet
     * @param {Array<Userxrole>} value
     */
	public set $roleXUserSet(value: Array<Userxrole>) {
		this.roleXUserSet = value;
	}
    

    /**
     * Getter $userId
     * @return {number}
     */
	public get $userId(): number {
		return this.userId;
	}

    /**
     * Setter $userId
     * @param {number} value
     */
	public set $userId(value: number) {
		this.userId = value;
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
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Getter $lastName
     * @return {string}
     */
	public get $lastName(): string {
		return this.lastName;
	}

    /**
     * Setter $lastName
     * @param {string} value
     */
	public set $lastName(value: string) {
		this.lastName = value;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Getter $eMail
     * @return {string}
     */
	public get $eMail(): string {
		return this.eMail;
	}

    /**
     * Setter $eMail
     * @param {string} value
     */
	public set $eMail(value: string) {
		this.eMail = value;
	}
    
    

}
