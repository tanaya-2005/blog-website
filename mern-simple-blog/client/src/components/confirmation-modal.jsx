function ConfirmationModal({ onClose, onConfirm }) {
    return (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm'>
            <div className='bg-white rounded-xl shadow-lg p-6 max-w-sm w-full space-y-4'>
                <h2 className='text-xl font-bold text-gray-900'>
                    Are you sure you want to delete this article?
                </h2>
                <p className='text-gray-600'>This action cannot be undone.</p>
                <div className='flex gap-3 pt-2'>
                    <button
                        onClick={onConfirm}
                        className='px-6 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition-colors'
                    >
                        Delete
                    </button>
                    <button
                        onClick={onClose}
                        className='px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors'
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
