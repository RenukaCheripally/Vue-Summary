export const Alert = {
    data() {
        return {
            types: {
                warning: 'Hey, look out!',
                success: 'Hey, you rock!',
                failure: 'Hey, it\'s ok!',
            }
        }
    },
    methods: {
        openAlert(type) {
            alert(this.types[type]);
        }
    }
}