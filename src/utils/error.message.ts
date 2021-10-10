export const ErrorMessages = {
    isNotFound: (fieldName: string): string => {
        return `This ${fieldName.toLowerCase()} does not exist`
    }
}